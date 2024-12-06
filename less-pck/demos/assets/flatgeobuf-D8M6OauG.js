const SIZEOF_SHORT = 2;
const SIZEOF_INT = 4;
const FILE_IDENTIFIER_LENGTH = 4;
const SIZE_PREFIX_LENGTH = 4;

const int32 = new Int32Array(2);
const float32 = new Float32Array(int32.buffer);
const float64 = new Float64Array(int32.buffer);
const isLittleEndian = new Uint16Array(new Uint8Array([1, 0]).buffer)[0] === 1;

var Encoding;
(function (Encoding) {
    Encoding[Encoding["UTF8_BYTES"] = 1] = "UTF8_BYTES";
    Encoding[Encoding["UTF16_STRING"] = 2] = "UTF16_STRING";
})(Encoding || (Encoding = {}));

class ByteBuffer {
    /**
     * Create a new ByteBuffer with a given array of bytes (`Uint8Array`)
     */
    constructor(bytes_) {
        this.bytes_ = bytes_;
        this.position_ = 0;
        this.text_decoder_ = new TextDecoder();
    }
    /**
     * Create and allocate a new ByteBuffer with a given size.
     */
    static allocate(byte_size) {
        return new ByteBuffer(new Uint8Array(byte_size));
    }
    clear() {
        this.position_ = 0;
    }
    /**
     * Get the underlying `Uint8Array`.
     */
    bytes() {
        return this.bytes_;
    }
    /**
     * Get the buffer's position.
     */
    position() {
        return this.position_;
    }
    /**
     * Set the buffer's position.
     */
    setPosition(position) {
        this.position_ = position;
    }
    /**
     * Get the buffer's capacity.
     */
    capacity() {
        return this.bytes_.length;
    }
    readInt8(offset) {
        return this.readUint8(offset) << 24 >> 24;
    }
    readUint8(offset) {
        return this.bytes_[offset];
    }
    readInt16(offset) {
        return this.readUint16(offset) << 16 >> 16;
    }
    readUint16(offset) {
        return this.bytes_[offset] | this.bytes_[offset + 1] << 8;
    }
    readInt32(offset) {
        return this.bytes_[offset] | this.bytes_[offset + 1] << 8 | this.bytes_[offset + 2] << 16 | this.bytes_[offset + 3] << 24;
    }
    readUint32(offset) {
        return this.readInt32(offset) >>> 0;
    }
    readInt64(offset) {
        return BigInt.asIntN(64, BigInt(this.readUint32(offset)) + (BigInt(this.readUint32(offset + 4)) << BigInt(32)));
    }
    readUint64(offset) {
        return BigInt.asUintN(64, BigInt(this.readUint32(offset)) + (BigInt(this.readUint32(offset + 4)) << BigInt(32)));
    }
    readFloat32(offset) {
        int32[0] = this.readInt32(offset);
        return float32[0];
    }
    readFloat64(offset) {
        int32[isLittleEndian ? 0 : 1] = this.readInt32(offset);
        int32[isLittleEndian ? 1 : 0] = this.readInt32(offset + 4);
        return float64[0];
    }
    writeInt8(offset, value) {
        this.bytes_[offset] = value;
    }
    writeUint8(offset, value) {
        this.bytes_[offset] = value;
    }
    writeInt16(offset, value) {
        this.bytes_[offset] = value;
        this.bytes_[offset + 1] = value >> 8;
    }
    writeUint16(offset, value) {
        this.bytes_[offset] = value;
        this.bytes_[offset + 1] = value >> 8;
    }
    writeInt32(offset, value) {
        this.bytes_[offset] = value;
        this.bytes_[offset + 1] = value >> 8;
        this.bytes_[offset + 2] = value >> 16;
        this.bytes_[offset + 3] = value >> 24;
    }
    writeUint32(offset, value) {
        this.bytes_[offset] = value;
        this.bytes_[offset + 1] = value >> 8;
        this.bytes_[offset + 2] = value >> 16;
        this.bytes_[offset + 3] = value >> 24;
    }
    writeInt64(offset, value) {
        this.writeInt32(offset, Number(BigInt.asIntN(32, value)));
        this.writeInt32(offset + 4, Number(BigInt.asIntN(32, value >> BigInt(32))));
    }
    writeUint64(offset, value) {
        this.writeUint32(offset, Number(BigInt.asUintN(32, value)));
        this.writeUint32(offset + 4, Number(BigInt.asUintN(32, value >> BigInt(32))));
    }
    writeFloat32(offset, value) {
        float32[0] = value;
        this.writeInt32(offset, int32[0]);
    }
    writeFloat64(offset, value) {
        float64[0] = value;
        this.writeInt32(offset, int32[isLittleEndian ? 0 : 1]);
        this.writeInt32(offset + 4, int32[isLittleEndian ? 1 : 0]);
    }
    /**
     * Return the file identifier.   Behavior is undefined for FlatBuffers whose
     * schema does not include a file_identifier (likely points at padding or the
     * start of a the root vtable).
     */
    getBufferIdentifier() {
        if (this.bytes_.length < this.position_ + SIZEOF_INT +
            FILE_IDENTIFIER_LENGTH) {
            throw new Error('FlatBuffers: ByteBuffer is too short to contain an identifier.');
        }
        let result = "";
        for (let i = 0; i < FILE_IDENTIFIER_LENGTH; i++) {
            result += String.fromCharCode(this.readInt8(this.position_ + SIZEOF_INT + i));
        }
        return result;
    }
    /**
     * Look up a field in the vtable, return an offset into the object, or 0 if the
     * field is not present.
     */
    __offset(bb_pos, vtable_offset) {
        const vtable = bb_pos - this.readInt32(bb_pos);
        return vtable_offset < this.readInt16(vtable) ? this.readInt16(vtable + vtable_offset) : 0;
    }
    /**
     * Initialize any Table-derived type to point to the union at the given offset.
     */
    __union(t, offset) {
        t.bb_pos = offset + this.readInt32(offset);
        t.bb = this;
        return t;
    }
    /**
     * Create a JavaScript string from UTF-8 data stored inside the FlatBuffer.
     * This allocates a new string and converts to wide chars upon each access.
     *
     * To avoid the conversion to string, pass Encoding.UTF8_BYTES as the
     * "optionalEncoding" argument. This is useful for avoiding conversion when
     * the data will just be packaged back up in another FlatBuffer later on.
     *
     * @param offset
     * @param opt_encoding Defaults to UTF16_STRING
     */
    __string(offset, opt_encoding) {
        offset += this.readInt32(offset);
        const length = this.readInt32(offset);
        offset += SIZEOF_INT;
        const utf8bytes = this.bytes_.subarray(offset, offset + length);
        if (opt_encoding === Encoding.UTF8_BYTES)
            return utf8bytes;
        else
            return this.text_decoder_.decode(utf8bytes);
    }
    /**
     * Handle unions that can contain string as its member, if a Table-derived type then initialize it,
     * if a string then return a new one
     *
     * WARNING: strings are immutable in JS so we can't change the string that the user gave us, this
     * makes the behaviour of __union_with_string different compared to __union
     */
    __union_with_string(o, offset) {
        if (typeof o === 'string') {
            return this.__string(offset);
        }
        return this.__union(o, offset);
    }
    /**
     * Retrieve the relative offset stored at "offset"
     */
    __indirect(offset) {
        return offset + this.readInt32(offset);
    }
    /**
     * Get the start of data of a vector whose offset is stored at "offset" in this object.
     */
    __vector(offset) {
        return offset + this.readInt32(offset) + SIZEOF_INT; // data starts after the length
    }
    /**
     * Get the length of a vector whose offset is stored at "offset" in this object.
     */
    __vector_len(offset) {
        return this.readInt32(offset + this.readInt32(offset));
    }
    __has_identifier(ident) {
        if (ident.length != FILE_IDENTIFIER_LENGTH) {
            throw new Error('FlatBuffers: file identifier must be length ' +
                FILE_IDENTIFIER_LENGTH);
        }
        for (let i = 0; i < FILE_IDENTIFIER_LENGTH; i++) {
            if (ident.charCodeAt(i) != this.readInt8(this.position() + SIZEOF_INT + i)) {
                return false;
            }
        }
        return true;
    }
    /**
     * A helper function for generating list for obj api
     */
    createScalarList(listAccessor, listLength) {
        const ret = [];
        for (let i = 0; i < listLength; ++i) {
            const val = listAccessor(i);
            if (val !== null) {
                ret.push(val);
            }
        }
        return ret;
    }
    /**
     * A helper function for generating list for obj api
     * @param listAccessor function that accepts an index and return data at that index
     * @param listLength listLength
     * @param res result list
     */
    createObjList(listAccessor, listLength) {
        const ret = [];
        for (let i = 0; i < listLength; ++i) {
            const val = listAccessor(i);
            if (val !== null) {
                ret.push(val.unpack());
            }
        }
        return ret;
    }
}

class Builder {
    /**
     * Create a FlatBufferBuilder.
     */
    constructor(opt_initial_size) {
        /** Minimum alignment encountered so far. */
        this.minalign = 1;
        /** The vtable for the current table. */
        this.vtable = null;
        /** The amount of fields we're actually using. */
        this.vtable_in_use = 0;
        /** Whether we are currently serializing a table. */
        this.isNested = false;
        /** Starting offset of the current struct/table. */
        this.object_start = 0;
        /** List of offsets of all vtables. */
        this.vtables = [];
        /** For the current vector being built. */
        this.vector_num_elems = 0;
        /** False omits default values from the serialized data */
        this.force_defaults = false;
        this.string_maps = null;
        this.text_encoder = new TextEncoder();
        let initial_size;
        if (!opt_initial_size) {
            initial_size = 1024;
        }
        else {
            initial_size = opt_initial_size;
        }
        /**
         * @type {ByteBuffer}
         * @private
         */
        this.bb = ByteBuffer.allocate(initial_size);
        this.space = initial_size;
    }
    clear() {
        this.bb.clear();
        this.space = this.bb.capacity();
        this.minalign = 1;
        this.vtable = null;
        this.vtable_in_use = 0;
        this.isNested = false;
        this.object_start = 0;
        this.vtables = [];
        this.vector_num_elems = 0;
        this.force_defaults = false;
        this.string_maps = null;
    }
    /**
     * In order to save space, fields that are set to their default value
     * don't get serialized into the buffer. Forcing defaults provides a
     * way to manually disable this optimization.
     *
     * @param forceDefaults true always serializes default values
     */
    forceDefaults(forceDefaults) {
        this.force_defaults = forceDefaults;
    }
    /**
     * Get the ByteBuffer representing the FlatBuffer. Only call this after you've
     * called finish(). The actual data starts at the ByteBuffer's current position,
     * not necessarily at 0.
     */
    dataBuffer() {
        return this.bb;
    }
    /**
     * Get the bytes representing the FlatBuffer. Only call this after you've
     * called finish().
     */
    asUint8Array() {
        return this.bb.bytes().subarray(this.bb.position(), this.bb.position() + this.offset());
    }
    /**
     * Prepare to write an element of `size` after `additional_bytes` have been
     * written, e.g. if you write a string, you need to align such the int length
     * field is aligned to 4 bytes, and the string data follows it directly. If all
     * you need to do is alignment, `additional_bytes` will be 0.
     *
     * @param size This is the of the new element to write
     * @param additional_bytes The padding size
     */
    prep(size, additional_bytes) {
        // Track the biggest thing we've ever aligned to.
        if (size > this.minalign) {
            this.minalign = size;
        }
        // Find the amount of alignment needed such that `size` is properly
        // aligned after `additional_bytes`
        const align_size = ((~(this.bb.capacity() - this.space + additional_bytes)) + 1) & (size - 1);
        // Reallocate the buffer if needed.
        while (this.space < align_size + size + additional_bytes) {
            const old_buf_size = this.bb.capacity();
            this.bb = Builder.growByteBuffer(this.bb);
            this.space += this.bb.capacity() - old_buf_size;
        }
        this.pad(align_size);
    }
    pad(byte_size) {
        for (let i = 0; i < byte_size; i++) {
            this.bb.writeInt8(--this.space, 0);
        }
    }
    writeInt8(value) {
        this.bb.writeInt8(this.space -= 1, value);
    }
    writeInt16(value) {
        this.bb.writeInt16(this.space -= 2, value);
    }
    writeInt32(value) {
        this.bb.writeInt32(this.space -= 4, value);
    }
    writeInt64(value) {
        this.bb.writeInt64(this.space -= 8, value);
    }
    writeFloat32(value) {
        this.bb.writeFloat32(this.space -= 4, value);
    }
    writeFloat64(value) {
        this.bb.writeFloat64(this.space -= 8, value);
    }
    /**
     * Add an `int8` to the buffer, properly aligned, and grows the buffer (if necessary).
     * @param value The `int8` to add the buffer.
     */
    addInt8(value) {
        this.prep(1, 0);
        this.writeInt8(value);
    }
    /**
     * Add an `int16` to the buffer, properly aligned, and grows the buffer (if necessary).
     * @param value The `int16` to add the buffer.
     */
    addInt16(value) {
        this.prep(2, 0);
        this.writeInt16(value);
    }
    /**
     * Add an `int32` to the buffer, properly aligned, and grows the buffer (if necessary).
     * @param value The `int32` to add the buffer.
     */
    addInt32(value) {
        this.prep(4, 0);
        this.writeInt32(value);
    }
    /**
     * Add an `int64` to the buffer, properly aligned, and grows the buffer (if necessary).
     * @param value The `int64` to add the buffer.
     */
    addInt64(value) {
        this.prep(8, 0);
        this.writeInt64(value);
    }
    /**
     * Add a `float32` to the buffer, properly aligned, and grows the buffer (if necessary).
     * @param value The `float32` to add the buffer.
     */
    addFloat32(value) {
        this.prep(4, 0);
        this.writeFloat32(value);
    }
    /**
     * Add a `float64` to the buffer, properly aligned, and grows the buffer (if necessary).
     * @param value The `float64` to add the buffer.
     */
    addFloat64(value) {
        this.prep(8, 0);
        this.writeFloat64(value);
    }
    addFieldInt8(voffset, value, defaultValue) {
        if (this.force_defaults || value != defaultValue) {
            this.addInt8(value);
            this.slot(voffset);
        }
    }
    addFieldInt16(voffset, value, defaultValue) {
        if (this.force_defaults || value != defaultValue) {
            this.addInt16(value);
            this.slot(voffset);
        }
    }
    addFieldInt32(voffset, value, defaultValue) {
        if (this.force_defaults || value != defaultValue) {
            this.addInt32(value);
            this.slot(voffset);
        }
    }
    addFieldInt64(voffset, value, defaultValue) {
        if (this.force_defaults || value !== defaultValue) {
            this.addInt64(value);
            this.slot(voffset);
        }
    }
    addFieldFloat32(voffset, value, defaultValue) {
        if (this.force_defaults || value != defaultValue) {
            this.addFloat32(value);
            this.slot(voffset);
        }
    }
    addFieldFloat64(voffset, value, defaultValue) {
        if (this.force_defaults || value != defaultValue) {
            this.addFloat64(value);
            this.slot(voffset);
        }
    }
    addFieldOffset(voffset, value, defaultValue) {
        if (this.force_defaults || value != defaultValue) {
            this.addOffset(value);
            this.slot(voffset);
        }
    }
    /**
     * Structs are stored inline, so nothing additional is being added. `d` is always 0.
     */
    addFieldStruct(voffset, value, defaultValue) {
        if (value != defaultValue) {
            this.nested(value);
            this.slot(voffset);
        }
    }
    /**
     * Structures are always stored inline, they need to be created right
     * where they're used.  You'll get this assertion failure if you
     * created it elsewhere.
     */
    nested(obj) {
        if (obj != this.offset()) {
            throw new TypeError('FlatBuffers: struct must be serialized inline.');
        }
    }
    /**
     * Should not be creating any other object, string or vector
     * while an object is being constructed
     */
    notNested() {
        if (this.isNested) {
            throw new TypeError('FlatBuffers: object serialization must not be nested.');
        }
    }
    /**
     * Set the current vtable at `voffset` to the current location in the buffer.
     */
    slot(voffset) {
        if (this.vtable !== null)
            this.vtable[voffset] = this.offset();
    }
    /**
     * @returns Offset relative to the end of the buffer.
     */
    offset() {
        return this.bb.capacity() - this.space;
    }
    /**
     * Doubles the size of the backing ByteBuffer and copies the old data towards
     * the end of the new buffer (since we build the buffer backwards).
     *
     * @param bb The current buffer with the existing data
     * @returns A new byte buffer with the old data copied
     * to it. The data is located at the end of the buffer.
     *
     * uint8Array.set() formally takes {Array<number>|ArrayBufferView}, so to pass
     * it a uint8Array we need to suppress the type check:
     * @suppress {checkTypes}
     */
    static growByteBuffer(bb) {
        const old_buf_size = bb.capacity();
        // Ensure we don't grow beyond what fits in an int.
        if (old_buf_size & 0xC0000000) {
            throw new Error('FlatBuffers: cannot grow buffer beyond 2 gigabytes.');
        }
        const new_buf_size = old_buf_size << 1;
        const nbb = ByteBuffer.allocate(new_buf_size);
        nbb.setPosition(new_buf_size - old_buf_size);
        nbb.bytes().set(bb.bytes(), new_buf_size - old_buf_size);
        return nbb;
    }
    /**
     * Adds on offset, relative to where it will be written.
     *
     * @param offset The offset to add.
     */
    addOffset(offset) {
        this.prep(SIZEOF_INT, 0); // Ensure alignment is already done.
        this.writeInt32(this.offset() - offset + SIZEOF_INT);
    }
    /**
     * Start encoding a new object in the buffer.  Users will not usually need to
     * call this directly. The FlatBuffers compiler will generate helper methods
     * that call this method internally.
     */
    startObject(numfields) {
        this.notNested();
        if (this.vtable == null) {
            this.vtable = [];
        }
        this.vtable_in_use = numfields;
        for (let i = 0; i < numfields; i++) {
            this.vtable[i] = 0; // This will push additional elements as needed
        }
        this.isNested = true;
        this.object_start = this.offset();
    }
    /**
     * Finish off writing the object that is under construction.
     *
     * @returns The offset to the object inside `dataBuffer`
     */
    endObject() {
        if (this.vtable == null || !this.isNested) {
            throw new Error('FlatBuffers: endObject called without startObject');
        }
        this.addInt32(0);
        const vtableloc = this.offset();
        // Trim trailing zeroes.
        let i = this.vtable_in_use - 1;
        // eslint-disable-next-line no-empty
        for (; i >= 0 && this.vtable[i] == 0; i--) { }
        const trimmed_size = i + 1;
        // Write out the current vtable.
        for (; i >= 0; i--) {
            // Offset relative to the start of the table.
            this.addInt16(this.vtable[i] != 0 ? vtableloc - this.vtable[i] : 0);
        }
        const standard_fields = 2; // The fields below:
        this.addInt16(vtableloc - this.object_start);
        const len = (trimmed_size + standard_fields) * SIZEOF_SHORT;
        this.addInt16(len);
        // Search for an existing vtable that matches the current one.
        let existing_vtable = 0;
        const vt1 = this.space;
        outer_loop: for (i = 0; i < this.vtables.length; i++) {
            const vt2 = this.bb.capacity() - this.vtables[i];
            if (len == this.bb.readInt16(vt2)) {
                for (let j = SIZEOF_SHORT; j < len; j += SIZEOF_SHORT) {
                    if (this.bb.readInt16(vt1 + j) != this.bb.readInt16(vt2 + j)) {
                        continue outer_loop;
                    }
                }
                existing_vtable = this.vtables[i];
                break;
            }
        }
        if (existing_vtable) {
            // Found a match:
            // Remove the current vtable.
            this.space = this.bb.capacity() - vtableloc;
            // Point table to existing vtable.
            this.bb.writeInt32(this.space, existing_vtable - vtableloc);
        }
        else {
            // No match:
            // Add the location of the current vtable to the list of vtables.
            this.vtables.push(this.offset());
            // Point table to current vtable.
            this.bb.writeInt32(this.bb.capacity() - vtableloc, this.offset() - vtableloc);
        }
        this.isNested = false;
        return vtableloc;
    }
    /**
     * Finalize a buffer, poiting to the given `root_table`.
     */
    finish(root_table, opt_file_identifier, opt_size_prefix) {
        const size_prefix = opt_size_prefix ? SIZE_PREFIX_LENGTH : 0;
        if (opt_file_identifier) {
            const file_identifier = opt_file_identifier;
            this.prep(this.minalign, SIZEOF_INT +
                FILE_IDENTIFIER_LENGTH + size_prefix);
            if (file_identifier.length != FILE_IDENTIFIER_LENGTH) {
                throw new TypeError('FlatBuffers: file identifier must be length ' +
                    FILE_IDENTIFIER_LENGTH);
            }
            for (let i = FILE_IDENTIFIER_LENGTH - 1; i >= 0; i--) {
                this.writeInt8(file_identifier.charCodeAt(i));
            }
        }
        this.prep(this.minalign, SIZEOF_INT + size_prefix);
        this.addOffset(root_table);
        if (size_prefix) {
            this.addInt32(this.bb.capacity() - this.space);
        }
        this.bb.setPosition(this.space);
    }
    /**
     * Finalize a size prefixed buffer, pointing to the given `root_table`.
     */
    finishSizePrefixed(root_table, opt_file_identifier) {
        this.finish(root_table, opt_file_identifier, true);
    }
    /**
     * This checks a required field has been set in a given table that has
     * just been constructed.
     */
    requiredField(table, field) {
        const table_start = this.bb.capacity() - table;
        const vtable_start = table_start - this.bb.readInt32(table_start);
        const ok = field < this.bb.readInt16(vtable_start) &&
            this.bb.readInt16(vtable_start + field) != 0;
        // If this fails, the caller will show what field needs to be set.
        if (!ok) {
            throw new TypeError('FlatBuffers: field ' + field + ' must be set');
        }
    }
    /**
     * Start a new array/vector of objects.  Users usually will not call
     * this directly. The FlatBuffers compiler will create a start/end
     * method for vector types in generated code.
     *
     * @param elem_size The size of each element in the array
     * @param num_elems The number of elements in the array
     * @param alignment The alignment of the array
     */
    startVector(elem_size, num_elems, alignment) {
        this.notNested();
        this.vector_num_elems = num_elems;
        this.prep(SIZEOF_INT, elem_size * num_elems);
        this.prep(alignment, elem_size * num_elems); // Just in case alignment > int.
    }
    /**
     * Finish off the creation of an array and all its elements. The array must be
     * created with `startVector`.
     *
     * @returns The offset at which the newly created array
     * starts.
     */
    endVector() {
        this.writeInt32(this.vector_num_elems);
        return this.offset();
    }
    /**
     * Encode the string `s` in the buffer using UTF-8. If the string passed has
     * already been seen, we return the offset of the already written string
     *
     * @param s The string to encode
     * @return The offset in the buffer where the encoded string starts
     */
    createSharedString(s) {
        if (!s) {
            return 0;
        }
        if (!this.string_maps) {
            this.string_maps = new Map();
        }
        if (this.string_maps.has(s)) {
            return this.string_maps.get(s);
        }
        const offset = this.createString(s);
        this.string_maps.set(s, offset);
        return offset;
    }
    /**
     * Encode the string `s` in the buffer using UTF-8. If a Uint8Array is passed
     * instead of a string, it is assumed to contain valid UTF-8 encoded data.
     *
     * @param s The string to encode
     * @return The offset in the buffer where the encoded string starts
     */
    createString(s) {
        if (s === null || s === undefined) {
            return 0;
        }
        let utf8;
        if (s instanceof Uint8Array) {
            utf8 = s;
        }
        else {
            utf8 = this.text_encoder.encode(s);
        }
        this.addInt8(0);
        this.startVector(1, utf8.length, 1);
        this.bb.setPosition(this.space -= utf8.length);
        this.bb.bytes().set(utf8, this.space);
        return this.endVector();
    }
    /**
     * Create a byte vector.
     *
     * @param v The bytes to add
     * @returns The offset in the buffer where the byte vector starts
     */
    createByteVector(v) {
        if (v === null || v === undefined) {
            return 0;
        }
        this.startVector(1, v.length, 1);
        this.bb.setPosition(this.space -= v.length);
        this.bb.bytes().set(v, this.space);
        return this.endVector();
    }
    /**
     * A helper function to pack an object
     *
     * @returns offset of obj
     */
    createObjectOffset(obj) {
        if (obj === null) {
            return 0;
        }
        if (typeof obj === 'string') {
            return this.createString(obj);
        }
        else {
            return obj.pack(this);
        }
    }
    /**
     * A helper function to pack a list of object
     *
     * @returns list of offsets of each non null object
     */
    createObjectOffsetList(list) {
        const ret = [];
        for (let i = 0; i < list.length; ++i) {
            const val = list[i];
            if (val !== null) {
                ret.push(this.createObjectOffset(val));
            }
            else {
                throw new TypeError('FlatBuffers: Argument for createObjectOffsetList cannot contain null.');
            }
        }
        return ret;
    }
    createStructOffsetList(list, startFunc) {
        startFunc(this, list.length);
        this.createObjectOffsetList(list.slice().reverse());
        return this.endVector();
    }
}

const empty = new Uint8Array(0);

function slice_cancel() {
  return this._source.cancel();
}

function concat(a, b) {
  if (!a.length) return b;
  if (!b.length) return a;
  var c = new Uint8Array(a.length + b.length);
  c.set(a);
  c.set(b, a.length);
  return c;
}

function slice_read() {
  var that = this, array = that._array.subarray(that._index);
  return that._source.read().then(function(result) {
    that._array = empty;
    that._index = 0;
    return result.done ? (array.length > 0
        ? {done: false, value: array}
        : {done: true, value: undefined})
        : {done: false, value: concat(array, result.value)};
  });
}

function slice_slice(length) {
  if ((length |= 0) < 0) throw new Error("invalid length");
  var that = this, index = this._array.length - this._index;

  // If the request fits within the remaining buffer, resolve it immediately.
  if (this._index + length <= this._array.length) {
    return Promise.resolve(this._array.subarray(this._index, this._index += length));
  }

  // Otherwise, read chunks repeatedly until the request is fulfilled.
  var array = new Uint8Array(length);
  array.set(this._array.subarray(this._index));
  return (function read() {
    return that._source.read().then(function(result) {

      // When done, it’s possible the request wasn’t fully fullfilled!
      // If so, the pre-allocated array is too big and needs slicing.
      if (result.done) {
        that._array = empty;
        that._index = 0;
        return index > 0 ? array.subarray(0, index) : null;
      }

      // If this chunk fulfills the request, return the resulting array.
      if (index + result.value.length >= length) {
        that._array = result.value;
        that._index = length - index;
        array.set(result.value.subarray(0, length - index), index);
        return array;
      }

      // Otherwise copy this chunk into the array, then read the next chunk.
      array.set(result.value, index);
      index += result.value.length;
      return read();
    });
  })();
}

function slice(source) {
  return typeof source.slice === "function" ? source :
      new SliceSource(typeof source.read === "function" ? source
          : source.getReader());
}

function SliceSource(source) {
  this._source = source;
  this._array = empty;
  this._index = 0;
}

SliceSource.prototype.read = slice_read;
SliceSource.prototype.slice = slice_slice;
SliceSource.prototype.cancel = slice_cancel;

var o$1;var ColumnType;(o$1=ColumnType||(ColumnType={}))[o$1.Byte=0]="Byte",o$1[o$1.UByte=1]="UByte",o$1[o$1.Bool=2]="Bool",o$1[o$1.Short=3]="Short",o$1[o$1.UShort=4]="UShort",o$1[o$1.Int=5]="Int",o$1[o$1.UInt=6]="UInt",o$1[o$1.Long=7]="Long",o$1[o$1.ULong=8]="ULong",o$1[o$1.Float=9]="Float",o$1[o$1.Double=10]="Double",o$1[o$1.String=11]="String",o$1[o$1.Json=12]="Json",o$1[o$1.DateTime=13]="DateTime",o$1[o$1.Binary=14]="Binary";

class Column{bb=null;bb_pos=0;__init(t,s){return this.bb_pos=t,this.bb=s,this}static getRootAsColumn(t,s){return (s||new Column).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsColumn(s,i){return s.setPosition(s.position()+SIZE_PREFIX_LENGTH),(i||new Column).__init(s.readInt32(s.position())+s.position(),s)}name(t){let s=this.bb.__offset(this.bb_pos,4);return s?this.bb.__string(this.bb_pos+s,t):null}type(){let t=this.bb.__offset(this.bb_pos,6);return t?this.bb.readUint8(this.bb_pos+t):ColumnType.Byte}title(t){let s=this.bb.__offset(this.bb_pos,8);return s?this.bb.__string(this.bb_pos+s,t):null}description(t){let s=this.bb.__offset(this.bb_pos,10);return s?this.bb.__string(this.bb_pos+s,t):null}width(){let t=this.bb.__offset(this.bb_pos,12);return t?this.bb.readInt32(this.bb_pos+t):-1}precision(){let t=this.bb.__offset(this.bb_pos,14);return t?this.bb.readInt32(this.bb_pos+t):-1}scale(){let t=this.bb.__offset(this.bb_pos,16);return t?this.bb.readInt32(this.bb_pos+t):-1}nullable(){let t=this.bb.__offset(this.bb_pos,18);return !t||!!this.bb.readInt8(this.bb_pos+t)}unique(){let t=this.bb.__offset(this.bb_pos,20);return !!t&&!!this.bb.readInt8(this.bb_pos+t)}primaryKey(){let t=this.bb.__offset(this.bb_pos,22);return !!t&&!!this.bb.readInt8(this.bb_pos+t)}metadata(t){let s=this.bb.__offset(this.bb_pos,24);return s?this.bb.__string(this.bb_pos+s,t):null}static startColumn(t){t.startObject(11);}static addName(t,s){t.addFieldOffset(0,s,0);}static addType(t,i){t.addFieldInt8(1,i,ColumnType.Byte);}static addTitle(t,s){t.addFieldOffset(2,s,0);}static addDescription(t,s){t.addFieldOffset(3,s,0);}static addWidth(t,s){t.addFieldInt32(4,s,-1);}static addPrecision(t,s){t.addFieldInt32(5,s,-1);}static addScale(t,s){t.addFieldInt32(6,s,-1);}static addNullable(t,s){t.addFieldInt8(7,+s,1);}static addUnique(t,s){t.addFieldInt8(8,+s,0);}static addPrimaryKey(t,s){t.addFieldInt8(9,+s,0);}static addMetadata(t,s){t.addFieldOffset(10,s,0);}static endColumn(t){let s=t.endObject();return t.requiredField(s,4),s}static createColumn(t,s,i,e,b,d,n,a,o,l,r,_){return Column.startColumn(t),Column.addName(t,s),Column.addType(t,i),Column.addTitle(t,e),Column.addDescription(t,b),Column.addWidth(t,d),Column.addPrecision(t,n),Column.addScale(t,a),Column.addNullable(t,o),Column.addUnique(t,l),Column.addPrimaryKey(t,r),Column.addMetadata(t,_),Column.endColumn(t)}}

class Crs{bb=null;bb_pos=0;__init(t,s){return this.bb_pos=t,this.bb=s,this}static getRootAsCrs(t,s){return (s||new Crs).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsCrs(s,i){return s.setPosition(s.position()+SIZE_PREFIX_LENGTH),(i||new Crs).__init(s.readInt32(s.position())+s.position(),s)}org(t){let s=this.bb.__offset(this.bb_pos,4);return s?this.bb.__string(this.bb_pos+s,t):null}code(){let t=this.bb.__offset(this.bb_pos,6);return t?this.bb.readInt32(this.bb_pos+t):0}name(t){let s=this.bb.__offset(this.bb_pos,8);return s?this.bb.__string(this.bb_pos+s,t):null}description(t){let s=this.bb.__offset(this.bb_pos,10);return s?this.bb.__string(this.bb_pos+s,t):null}wkt(t){let s=this.bb.__offset(this.bb_pos,12);return s?this.bb.__string(this.bb_pos+s,t):null}codeString(t){let s=this.bb.__offset(this.bb_pos,14);return s?this.bb.__string(this.bb_pos+s,t):null}static startCrs(t){t.startObject(6);}static addOrg(t,s){t.addFieldOffset(0,s,0);}static addCode(t,s){t.addFieldInt32(1,s,0);}static addName(t,s){t.addFieldOffset(2,s,0);}static addDescription(t,s){t.addFieldOffset(3,s,0);}static addWkt(t,s){t.addFieldOffset(4,s,0);}static addCodeString(t,s){t.addFieldOffset(5,s,0);}static endCrs(t){return t.endObject()}static createCrs(t,s,i,e,r,b,d){return Crs.startCrs(t),Crs.addOrg(t,s),Crs.addCode(t,i),Crs.addName(t,e),Crs.addDescription(t,r),Crs.addWkt(t,b),Crs.addCodeString(t,d),Crs.endCrs(t)}}

var e$1;var GeometryType;(e$1=GeometryType||(GeometryType={}))[e$1.Unknown=0]="Unknown",e$1[e$1.Point=1]="Point",e$1[e$1.LineString=2]="LineString",e$1[e$1.Polygon=3]="Polygon",e$1[e$1.MultiPoint=4]="MultiPoint",e$1[e$1.MultiLineString=5]="MultiLineString",e$1[e$1.MultiPolygon=6]="MultiPolygon",e$1[e$1.GeometryCollection=7]="GeometryCollection",e$1[e$1.CircularString=8]="CircularString",e$1[e$1.CompoundCurve=9]="CompoundCurve",e$1[e$1.CurvePolygon=10]="CurvePolygon",e$1[e$1.MultiCurve=11]="MultiCurve",e$1[e$1.MultiSurface=12]="MultiSurface",e$1[e$1.Curve=13]="Curve",e$1[e$1.Surface=14]="Surface",e$1[e$1.PolyhedralSurface=15]="PolyhedralSurface",e$1[e$1.TIN=16]="TIN",e$1[e$1.Triangle=17]="Triangle";

class Header{bb=null;bb_pos=0;__init(t,s){return this.bb_pos=t,this.bb=s,this}static getRootAsHeader(t,s){return (s||new Header).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsHeader(s,e){return s.setPosition(s.position()+SIZE_PREFIX_LENGTH),(e||new Header).__init(s.readInt32(s.position())+s.position(),s)}name(t){let s=this.bb.__offset(this.bb_pos,4);return s?this.bb.__string(this.bb_pos+s,t):null}envelope(t){let s=this.bb.__offset(this.bb_pos,6);return s?this.bb.readFloat64(this.bb.__vector(this.bb_pos+s)+8*t):0}envelopeLength(){let t=this.bb.__offset(this.bb_pos,6);return t?this.bb.__vector_len(this.bb_pos+t):0}envelopeArray(){let t=this.bb.__offset(this.bb_pos,6);return t?new Float64Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+t),this.bb.__vector_len(this.bb_pos+t)):null}geometryType(){let t=this.bb.__offset(this.bb_pos,8);return t?this.bb.readUint8(this.bb_pos+t):GeometryType.Unknown}hasZ(){let t=this.bb.__offset(this.bb_pos,10);return !!t&&!!this.bb.readInt8(this.bb_pos+t)}hasM(){let t=this.bb.__offset(this.bb_pos,12);return !!t&&!!this.bb.readInt8(this.bb_pos+t)}hasT(){let t=this.bb.__offset(this.bb_pos,14);return !!t&&!!this.bb.readInt8(this.bb_pos+t)}hasTm(){let t=this.bb.__offset(this.bb_pos,16);return !!t&&!!this.bb.readInt8(this.bb_pos+t)}columns(t,e){let i=this.bb.__offset(this.bb_pos,18);return i?(e||new Column).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+4*t),this.bb):null}columnsLength(){let t=this.bb.__offset(this.bb_pos,18);return t?this.bb.__vector_len(this.bb_pos+t):0}featuresCount(){let t=this.bb.__offset(this.bb_pos,20);return t?this.bb.readUint64(this.bb_pos+t):BigInt("0")}indexNodeSize(){let t=this.bb.__offset(this.bb_pos,22);return t?this.bb.readUint16(this.bb_pos+t):16}crs(t){let s=this.bb.__offset(this.bb_pos,24);return s?(t||new Crs).__init(this.bb.__indirect(this.bb_pos+s),this.bb):null}title(t){let s=this.bb.__offset(this.bb_pos,26);return s?this.bb.__string(this.bb_pos+s,t):null}description(t){let s=this.bb.__offset(this.bb_pos,28);return s?this.bb.__string(this.bb_pos+s,t):null}metadata(t){let s=this.bb.__offset(this.bb_pos,30);return s?this.bb.__string(this.bb_pos+s,t):null}static startHeader(t){t.startObject(14);}static addName(t,s){t.addFieldOffset(0,s,0);}static addEnvelope(t,s){t.addFieldOffset(1,s,0);}static createEnvelopeVector(t,s){t.startVector(8,s.length,8);for(let e=s.length-1;e>=0;e--)t.addFloat64(s[e]);return t.endVector()}static startEnvelopeVector(t,s){t.startVector(8,s,8);}static addGeometryType(t,s){t.addFieldInt8(2,s,GeometryType.Unknown);}static addHasZ(t,s){t.addFieldInt8(3,+s,0);}static addHasM(t,s){t.addFieldInt8(4,+s,0);}static addHasT(t,s){t.addFieldInt8(5,+s,0);}static addHasTm(t,s){t.addFieldInt8(6,+s,0);}static addColumns(t,s){t.addFieldOffset(7,s,0);}static createColumnsVector(t,s){t.startVector(4,s.length,4);for(let e=s.length-1;e>=0;e--)t.addOffset(s[e]);return t.endVector()}static startColumnsVector(t,s){t.startVector(4,s,4);}static addFeaturesCount(t,s){t.addFieldInt64(8,s,BigInt("0"));}static addIndexNodeSize(t,s){t.addFieldInt16(9,s,16);}static addCrs(t,s){t.addFieldOffset(10,s,0);}static addTitle(t,s){t.addFieldOffset(11,s,0);}static addDescription(t,s){t.addFieldOffset(12,s,0);}static addMetadata(t,s){t.addFieldOffset(13,s,0);}static endHeader(t){return t.endObject()}static finishHeaderBuffer(t,s){t.finish(s);}static finishSizePrefixedHeaderBuffer(t,s){t.finish(s,void 0,!0);}}

class Geometry{bb=null;bb_pos=0;__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsGeometry(t,e){return (e||new Geometry).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsGeometry(e,s){return e.setPosition(e.position()+SIZE_PREFIX_LENGTH),(s||new Geometry).__init(e.readInt32(e.position())+e.position(),e)}ends(t){let e=this.bb.__offset(this.bb_pos,4);return e?this.bb.readUint32(this.bb.__vector(this.bb_pos+e)+4*t):0}endsLength(){let t=this.bb.__offset(this.bb_pos,4);return t?this.bb.__vector_len(this.bb_pos+t):0}endsArray(){let t=this.bb.__offset(this.bb_pos,4);return t?new Uint32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+t),this.bb.__vector_len(this.bb_pos+t)):null}xy(t){let e=this.bb.__offset(this.bb_pos,6);return e?this.bb.readFloat64(this.bb.__vector(this.bb_pos+e)+8*t):0}xyLength(){let t=this.bb.__offset(this.bb_pos,6);return t?this.bb.__vector_len(this.bb_pos+t):0}xyArray(){let t=this.bb.__offset(this.bb_pos,6);return t?new Float64Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+t),this.bb.__vector_len(this.bb_pos+t)):null}z(t){let e=this.bb.__offset(this.bb_pos,8);return e?this.bb.readFloat64(this.bb.__vector(this.bb_pos+e)+8*t):0}zLength(){let t=this.bb.__offset(this.bb_pos,8);return t?this.bb.__vector_len(this.bb_pos+t):0}zArray(){let t=this.bb.__offset(this.bb_pos,8);return t?new Float64Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+t),this.bb.__vector_len(this.bb_pos+t)):null}m(t){let e=this.bb.__offset(this.bb_pos,10);return e?this.bb.readFloat64(this.bb.__vector(this.bb_pos+e)+8*t):0}mLength(){let t=this.bb.__offset(this.bb_pos,10);return t?this.bb.__vector_len(this.bb_pos+t):0}mArray(){let t=this.bb.__offset(this.bb_pos,10);return t?new Float64Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+t),this.bb.__vector_len(this.bb_pos+t)):null}t(t){let e=this.bb.__offset(this.bb_pos,12);return e?this.bb.readFloat64(this.bb.__vector(this.bb_pos+e)+8*t):0}tLength(){let t=this.bb.__offset(this.bb_pos,12);return t?this.bb.__vector_len(this.bb_pos+t):0}tArray(){let t=this.bb.__offset(this.bb_pos,12);return t?new Float64Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+t),this.bb.__vector_len(this.bb_pos+t)):null}tm(t){let e=this.bb.__offset(this.bb_pos,14);return e?this.bb.readUint64(this.bb.__vector(this.bb_pos+e)+8*t):BigInt(0)}tmLength(){let t=this.bb.__offset(this.bb_pos,14);return t?this.bb.__vector_len(this.bb_pos+t):0}type(){let t=this.bb.__offset(this.bb_pos,16);return t?this.bb.readUint8(this.bb_pos+t):GeometryType.Unknown}parts(t,e){let s=this.bb.__offset(this.bb_pos,18);return s?(e||new Geometry).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+s)+4*t),this.bb):null}partsLength(){let t=this.bb.__offset(this.bb_pos,18);return t?this.bb.__vector_len(this.bb_pos+t):0}static startGeometry(t){t.startObject(8);}static addEnds(t,e){t.addFieldOffset(0,e,0);}static createEndsVector(t,e){t.startVector(4,e.length,4);for(let s=e.length-1;s>=0;s--)t.addInt32(e[s]);return t.endVector()}static startEndsVector(t,e){t.startVector(4,e,4);}static addXy(t,e){t.addFieldOffset(1,e,0);}static createXyVector(t,e){t.startVector(8,e.length,8);for(let s=e.length-1;s>=0;s--)t.addFloat64(e[s]);return t.endVector()}static startXyVector(t,e){t.startVector(8,e,8);}static addZ(t,e){t.addFieldOffset(2,e,0);}static createZVector(t,e){t.startVector(8,e.length,8);for(let s=e.length-1;s>=0;s--)t.addFloat64(e[s]);return t.endVector()}static startZVector(t,e){t.startVector(8,e,8);}static addM(t,e){t.addFieldOffset(3,e,0);}static createMVector(t,e){t.startVector(8,e.length,8);for(let s=e.length-1;s>=0;s--)t.addFloat64(e[s]);return t.endVector()}static startMVector(t,e){t.startVector(8,e,8);}static addT(t,e){t.addFieldOffset(4,e,0);}static createTVector(t,e){t.startVector(8,e.length,8);for(let s=e.length-1;s>=0;s--)t.addFloat64(e[s]);return t.endVector()}static startTVector(t,e){t.startVector(8,e,8);}static addTm(t,e){t.addFieldOffset(5,e,0);}static createTmVector(t,e){t.startVector(8,e.length,8);for(let s=e.length-1;s>=0;s--)t.addInt64(e[s]);return t.endVector()}static startTmVector(t,e){t.startVector(8,e,8);}static addType(t,s){t.addFieldInt8(6,s,GeometryType.Unknown);}static addParts(t,e){t.addFieldOffset(7,e,0);}static createPartsVector(t,e){t.startVector(4,e.length,4);for(let s=e.length-1;s>=0;s--)t.addOffset(e[s]);return t.endVector()}static startPartsVector(t,e){t.startVector(4,e,4);}static endGeometry(t){return t.endObject()}static createGeometry(t,e,s,b,r,o,i,_,h){return Geometry.startGeometry(t),Geometry.addEnds(t,e),Geometry.addXy(t,s),Geometry.addZ(t,b),Geometry.addM(t,r),Geometry.addT(t,o),Geometry.addTm(t,i),Geometry.addType(t,_),Geometry.addParts(t,h),Geometry.endGeometry(t)}}

class Feature{bb=null;bb_pos=0;__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsFeature(t,e){return (e||new Feature).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsFeature(e,s){return e.setPosition(e.position()+SIZE_PREFIX_LENGTH),(s||new Feature).__init(e.readInt32(e.position())+e.position(),e)}geometry(t){let e=this.bb.__offset(this.bb_pos,4);return e?(t||new Geometry).__init(this.bb.__indirect(this.bb_pos+e),this.bb):null}properties(t){let e=this.bb.__offset(this.bb_pos,6);return e?this.bb.readUint8(this.bb.__vector(this.bb_pos+e)+t):0}propertiesLength(){let t=this.bb.__offset(this.bb_pos,6);return t?this.bb.__vector_len(this.bb_pos+t):0}propertiesArray(){let t=this.bb.__offset(this.bb_pos,6);return t?new Uint8Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+t),this.bb.__vector_len(this.bb_pos+t)):null}columns(t,s){let r=this.bb.__offset(this.bb_pos,8);return r?(s||new Column).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+r)+4*t),this.bb):null}columnsLength(){let t=this.bb.__offset(this.bb_pos,8);return t?this.bb.__vector_len(this.bb_pos+t):0}static startFeature(t){t.startObject(3);}static addGeometry(t,e){t.addFieldOffset(0,e,0);}static addProperties(t,e){t.addFieldOffset(1,e,0);}static createPropertiesVector(t,e){t.startVector(1,e.length,1);for(let s=e.length-1;s>=0;s--)t.addInt8(e[s]);return t.endVector()}static startPropertiesVector(t,e){t.startVector(1,e,1);}static addColumns(t,e){t.addFieldOffset(2,e,0);}static createColumnsVector(t,e){t.startVector(4,e.length,4);for(let s=e.length-1;s>=0;s--)t.addOffset(e[s]);return t.endVector()}static startColumnsVector(t,e){t.startVector(4,e,4);}static endFeature(t){return t.endObject()}static finishFeatureBuffer(t,e){t.finish(e);}static finishSizePrefixedFeatureBuffer(t,e){t.finish(e,void 0,!0);}static createFeature(t,e,s,r){return Feature.startFeature(t),Feature.addGeometry(t,e),Feature.addProperties(t,s),Feature.addColumns(t,r),Feature.endFeature(t)}}

function fromByteBuffer(t){let r=Header.getRootAsHeader(t),i=r.featuresCount(),n=r.indexNodeSize(),o=[];for(let e=0;e<r.columnsLength();e++){let t=r.columns(e);if(!t)throw Error("Column unexpectedly missing");if(!t.name())throw Error("Column name unexpectedly missing");o.push({name:t.name(),type:t.type(),title:t.title(),description:t.description(),width:t.width(),precision:t.precision(),scale:t.scale(),nullable:t.nullable(),unique:t.unique(),primary_key:t.primaryKey()});}let l=r.crs(),s=l?{org:l.org(),code:l.code(),name:l.name(),description:l.description(),wkt:l.wkt(),code_string:l.codeString()}:null;return {geometryType:r.geometryType(),columns:o,envelope:null,featuresCount:Number(i),indexNodeSize:n,crs:s,title:r.title(),description:r.description(),metadata:r.metadata()}}

function buildGeometry(e,o){let r,n;let{xy:a,z:l,ends:s,parts:d,type:i}=o;if(d){let o=d.map(t=>buildGeometry(e,t)),r=Geometry.createPartsVector(e,o);return Geometry.startGeometry(e),Geometry.addParts(e,r),Geometry.addType(e,i),Geometry.endGeometry(e)}let y=Geometry.createXyVector(e,a);return l&&(r=Geometry.createZVector(e,l)),s&&(n=Geometry.createEndsVector(e,s)),Geometry.startGeometry(e),n&&Geometry.addEnds(e,n),Geometry.addXy(e,y),r&&Geometry.addZ(e,r),Geometry.addType(e,i),Geometry.endGeometry(e)}function flat(e,t,o){if(0!==e.length){if(Array.isArray(e[0]))for(let r of e)flat(r,t,o);else 2===e.length?t.push(...e):(t.push(e[0],e[1]),o.push(e[2]));}}function pairFlatCoordinates(e,t){let o=[];for(let r=0;r<e.length;r+=2){let n=[e[r],e[r+1]];t&&n.push(t[r>>1]),o.push(n);}return o}function toGeometryType(t){return t?GeometryType[t]:GeometryType.Unknown}

let n=new TextEncoder,o=new TextDecoder;function buildFeature(o,s,i){let l=i.columns,c=new Builder,g=0,b=1024,f=new Uint8Array(1024),u=new DataView(f.buffer),p=function(e){if(g+e<b)return;let t=new Uint8Array(b=Math.max(b+e,2*b));t.set(f),u=new DataView((f=t).buffer);};if(l)for(let e=0;e<l.length;e++){let r=l[e],a=s[r.name];if(null!==a)switch(p(2),u.setUint16(g,e,!0),g+=2,r.type){case ColumnType.Bool:p(1),u.setUint8(g,a),g+=1;break;case ColumnType.Short:p(2),u.setInt16(g,a,!0),g+=2;break;case ColumnType.UShort:p(2),u.setUint16(g,a,!0),g+=2;break;case ColumnType.Int:p(4),u.setInt32(g,a,!0),g+=4;break;case ColumnType.UInt:p(4),u.setUint32(g,a,!0),g+=4;break;case ColumnType.Long:p(8),u.setBigInt64(g,BigInt(a),!0),g+=8;break;case ColumnType.Float:p(4),u.setFloat32(g,a,!0),g+=4;break;case ColumnType.Double:p(8),u.setFloat64(g,a,!0),g+=8;break;case ColumnType.DateTime:case ColumnType.String:{let e=n.encode(a);p(4),u.setUint32(g,e.length,!0),g+=4,p(e.length),f.set(e,g),g+=e.length;break}case ColumnType.Json:{let e=n.encode(JSON.stringify(a));p(4),u.setUint32(g,e.length,!0),g+=4,p(e.length),f.set(e,g),g+=e.length;break}default:throw Error("Unknown type "+r.type)}}let k=0;g>0&&(k=Feature.createPropertiesVector(c,f.slice(0,g)));let U=buildGeometry(c,o);Feature.startFeature(c),Feature.addGeometry(c,U),k&&Feature.addProperties(c,k);let m=Feature.endFeature(c);return c.finishSizePrefixed(m),c.asUint8Array()}function parseProperties(e,r){let a={};if(!r||0===r.length)return a;let n=e.propertiesArray();if(!n)return a;let s=new DataView(n.buffer,n.byteOffset),i=e.propertiesLength(),l=0;for(;l<i;){let e=s.getUint16(l,!0);l+=2;let i=r[e],c=i.name;switch(i.type){case ColumnType.Bool:a[c]=!!s.getUint8(l),l+=1;break;case ColumnType.Byte:a[c]=s.getInt8(l),l+=1;break;case ColumnType.UByte:a[c]=s.getUint8(l),l+=1;break;case ColumnType.Short:a[c]=s.getInt16(l,!0),l+=2;break;case ColumnType.UShort:a[c]=s.getUint16(l,!0),l+=2;break;case ColumnType.Int:a[c]=s.getInt32(l,!0),l+=4;break;case ColumnType.UInt:a[c]=s.getUint32(l,!0),l+=4;break;case ColumnType.Long:a[c]=Number(s.getBigInt64(l,!0)),l+=8;break;case ColumnType.ULong:a[c]=Number(s.getBigUint64(l,!0)),l+=8;break;case ColumnType.Float:a[c]=s.getFloat32(l,!0),l+=4;break;case ColumnType.Double:a[c]=s.getFloat64(l,!0),l+=8;break;case ColumnType.DateTime:case ColumnType.String:{let e=s.getUint32(l,!0);l+=4,a[c]=o.decode(n.subarray(l,l+e)),l+=e;break}case ColumnType.Json:{let e=s.getUint32(l,!0);l+=4;let t=o.decode(n.subarray(l,l+e));a[c]=JSON.parse(t),l+=e;break}default:throw Error("Unknown type "+i.type)}}return a}

/// <reference types="./repeater.d.ts" />
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

/** An error subclass which is thrown when there are too many pending push or next operations on a single repeater. */
var RepeaterOverflowError = /** @class */ (function (_super) {
    __extends(RepeaterOverflowError, _super);
    function RepeaterOverflowError(message) {
        var _this = _super.call(this, message) || this;
        Object.defineProperty(_this, "name", {
            value: "RepeaterOverflowError",
            enumerable: false,
        });
        if (typeof Object.setPrototypeOf === "function") {
            Object.setPrototypeOf(_this, _this.constructor.prototype);
        }
        else {
            _this.__proto__ = _this.constructor.prototype;
        }
        if (typeof Error.captureStackTrace === "function") {
            Error.captureStackTrace(_this, _this.constructor);
        }
        return _this;
    }
    return RepeaterOverflowError;
}(Error));
/** A buffer which allows you to push a set amount of values to the repeater without pushes waiting or throwing errors. */
/** @class */ ((function () {
    function FixedBuffer(capacity) {
        if (capacity < 0) {
            throw new RangeError("Capacity may not be less than 0");
        }
        this._c = capacity;
        this._q = [];
    }
    Object.defineProperty(FixedBuffer.prototype, "empty", {
        get: function () {
            return this._q.length === 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FixedBuffer.prototype, "full", {
        get: function () {
            return this._q.length >= this._c;
        },
        enumerable: false,
        configurable: true
    });
    FixedBuffer.prototype.add = function (value) {
        if (this.full) {
            throw new Error("Buffer full");
        }
        else {
            this._q.push(value);
        }
    };
    FixedBuffer.prototype.remove = function () {
        if (this.empty) {
            throw new Error("Buffer empty");
        }
        return this._q.shift();
    };
    return FixedBuffer;
})());
// TODO: Use a circular buffer here.
/** Sliding buffers allow you to push a set amount of values to the repeater without pushes waiting or throwing errors. If the number of values exceeds the capacity set in the constructor, the buffer will discard the earliest values added. */
/** @class */ ((function () {
    function SlidingBuffer(capacity) {
        if (capacity < 1) {
            throw new RangeError("Capacity may not be less than 1");
        }
        this._c = capacity;
        this._q = [];
    }
    Object.defineProperty(SlidingBuffer.prototype, "empty", {
        get: function () {
            return this._q.length === 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SlidingBuffer.prototype, "full", {
        get: function () {
            return false;
        },
        enumerable: false,
        configurable: true
    });
    SlidingBuffer.prototype.add = function (value) {
        while (this._q.length >= this._c) {
            this._q.shift();
        }
        this._q.push(value);
    };
    SlidingBuffer.prototype.remove = function () {
        if (this.empty) {
            throw new Error("Buffer empty");
        }
        return this._q.shift();
    };
    return SlidingBuffer;
})());
/** Dropping buffers allow you to push a set amount of values to the repeater without the push function waiting or throwing errors. If the number of values exceeds the capacity set in the constructor, the buffer will discard the latest values added. */
/** @class */ ((function () {
    function DroppingBuffer(capacity) {
        if (capacity < 1) {
            throw new RangeError("Capacity may not be less than 1");
        }
        this._c = capacity;
        this._q = [];
    }
    Object.defineProperty(DroppingBuffer.prototype, "empty", {
        get: function () {
            return this._q.length === 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DroppingBuffer.prototype, "full", {
        get: function () {
            return false;
        },
        enumerable: false,
        configurable: true
    });
    DroppingBuffer.prototype.add = function (value) {
        if (this._q.length < this._c) {
            this._q.push(value);
        }
    };
    DroppingBuffer.prototype.remove = function () {
        if (this.empty) {
            throw new Error("Buffer empty");
        }
        return this._q.shift();
    };
    return DroppingBuffer;
})());
/** Makes sure promise-likes don’t cause unhandled rejections. */
function swallow(value) {
    if (value != null && typeof value.then === "function") {
        value.then(NOOP, NOOP);
    }
}
/*** REPEATER STATES ***/
/** The following is an enumeration of all possible repeater states. These states are ordered, and a repeater may only advance to higher states. */
/** The initial state of the repeater. */
var Initial = 0;
/** Repeaters advance to this state the first time the next method is called on the repeater. */
var Started = 1;
/** Repeaters advance to this state when the stop function is called. */
var Stopped = 2;
/** Repeaters advance to this state when there are no values left to be pulled from the repeater. */
var Done = 3;
/** Repeaters advance to this state if an error is thrown into the repeater. */
var Rejected = 4;
/** The maximum number of push or next operations which may exist on a single repeater. */
var MAX_QUEUE_LENGTH = 1024;
var NOOP = function () { };
/** A helper function used to mimic the behavior of async generators where the final iteration is consumed. */
function consumeExecution(r) {
    var err = r.err;
    var execution = Promise.resolve(r.execution).then(function (value) {
        if (err != null) {
            throw err;
        }
        return value;
    });
    r.err = undefined;
    r.execution = execution.then(function () { return undefined; }, function () { return undefined; });
    return r.pending === undefined ? execution : r.pending.then(function () { return execution; });
}
/** A helper function for building iterations from values. Promises are unwrapped, so that iterations never have their value property set to a promise. */
function createIteration(r, value) {
    var done = r.state >= Done;
    return Promise.resolve(value).then(function (value) {
        if (!done && r.state >= Rejected) {
            return consumeExecution(r).then(function (value) { return ({
                value: value,
                done: true,
            }); });
        }
        return { value: value, done: done };
    });
}
/**
 * This function is bound and passed to the executor as the stop argument.
 *
 * Advances state to Stopped.
 */
function stop(r, err) {
    var e_1, _a;
    if (r.state >= Stopped) {
        return;
    }
    r.state = Stopped;
    r.onnext();
    r.onstop();
    if (r.err == null) {
        r.err = err;
    }
    if (r.pushes.length === 0 &&
        (typeof r.buffer === "undefined" || r.buffer.empty)) {
        finish(r);
    }
    else {
        try {
            for (var _b = __values(r.pushes), _d = _b.next(); !_d.done; _d = _b.next()) {
                var push_1 = _d.value;
                push_1.resolve();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
}
/**
 * The difference between stopping a repeater vs finishing a repeater is that stopping a repeater allows next to continue to drain values from the push queue and buffer, while finishing a repeater will clear all pending values and end iteration immediately. Once, a repeater is finished, all iterations will have the done property set to true.
 *
 * Advances state to Done.
 */
function finish(r) {
    var e_2, _a;
    if (r.state >= Done) {
        return;
    }
    if (r.state < Stopped) {
        stop(r);
    }
    r.state = Done;
    r.buffer = undefined;
    try {
        for (var _b = __values(r.nexts), _d = _b.next(); !_d.done; _d = _b.next()) {
            var next = _d.value;
            var execution = r.pending === undefined
                ? consumeExecution(r)
                : r.pending.then(function () { return consumeExecution(r); });
            next.resolve(createIteration(r, execution));
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_2) throw e_2.error; }
    }
    r.pushes = [];
    r.nexts = [];
}
/**
 * Called when a promise passed to push rejects, or when a push call is unhandled.
 *
 * Advances state to Rejected.
 */
function reject(r) {
    if (r.state >= Rejected) {
        return;
    }
    if (r.state < Done) {
        finish(r);
    }
    r.state = Rejected;
}
/** This function is bound and passed to the executor as the push argument. */
function push(r, value) {
    swallow(value);
    if (r.pushes.length >= MAX_QUEUE_LENGTH) {
        throw new RepeaterOverflowError("No more than " + MAX_QUEUE_LENGTH + " pending calls to push are allowed on a single repeater.");
    }
    else if (r.state >= Stopped) {
        return Promise.resolve(undefined);
    }
    var valueP = r.pending === undefined
        ? Promise.resolve(value)
        : r.pending.then(function () { return value; });
    valueP = valueP.catch(function (err) {
        if (r.state < Stopped) {
            r.err = err;
        }
        reject(r);
        return undefined; // void :(
    });
    var nextP;
    if (r.nexts.length) {
        var next_1 = r.nexts.shift();
        next_1.resolve(createIteration(r, valueP));
        if (r.nexts.length) {
            nextP = Promise.resolve(r.nexts[0].value);
        }
        else if (typeof r.buffer !== "undefined" && !r.buffer.full) {
            nextP = Promise.resolve(undefined);
        }
        else {
            nextP = new Promise(function (resolve) { return (r.onnext = resolve); });
        }
    }
    else if (typeof r.buffer !== "undefined" && !r.buffer.full) {
        r.buffer.add(valueP);
        nextP = Promise.resolve(undefined);
    }
    else {
        nextP = new Promise(function (resolve) { return r.pushes.push({ resolve: resolve, value: valueP }); });
    }
    // If an error is thrown into the repeater via the next or throw methods, we give the repeater a chance to handle this by rejecting the promise returned from push. If the push call is not immediately handled we throw the next iteration of the repeater.
    // To check that the promise returned from push is floating, we modify the then and catch methods of the returned promise so that they flip the floating flag. The push function actually does not return a promise, because modern engines do not call the then and catch methods on native promises. By making next a plain old javascript object, we ensure that the then and catch methods will be called.
    var floating = true;
    var next = {};
    var unhandled = nextP.catch(function (err) {
        if (floating) {
            throw err;
        }
        return undefined; // void :(
    });
    next.then = function (onfulfilled, onrejected) {
        floating = false;
        return Promise.prototype.then.call(nextP, onfulfilled, onrejected);
    };
    next.catch = function (onrejected) {
        floating = false;
        return Promise.prototype.catch.call(nextP, onrejected);
    };
    next.finally = nextP.finally.bind(nextP);
    r.pending = valueP
        .then(function () { return unhandled; })
        .catch(function (err) {
        r.err = err;
        reject(r);
    });
    return next;
}
/**
 * Creates the stop callable promise which is passed to the executor
 */
function createStop(r) {
    var stop1 = stop.bind(null, r);
    var stopP = new Promise(function (resolve) { return (r.onstop = resolve); });
    stop1.then = stopP.then.bind(stopP);
    stop1.catch = stopP.catch.bind(stopP);
    stop1.finally = stopP.finally.bind(stopP);
    return stop1;
}
/**
 * Calls the executor passed into the constructor. This function is called the first time the next method is called on the repeater.
 *
 * Advances state to Started.
 */
function execute(r) {
    if (r.state >= Started) {
        return;
    }
    r.state = Started;
    var push1 = push.bind(null, r);
    var stop1 = createStop(r);
    r.execution = new Promise(function (resolve) { return resolve(r.executor(push1, stop1)); });
    // TODO: We should consider stopping all repeaters when the executor settles.
    r.execution.catch(function () { return stop(r); });
}
var records = new WeakMap();
// NOTE: While repeaters implement and are assignable to the AsyncGenerator interface, and you can use the types interchangeably, we don’t use typescript’s implements syntax here because this would make supporting earlier versions of typescript trickier. This is because TypeScript version 3.6 changed the iterator types by adding the TReturn and TNext type parameters.
var Repeater = /** @class */ (function () {
    function Repeater(executor, buffer) {
        records.set(this, {
            executor: executor,
            buffer: buffer,
            err: undefined,
            state: Initial,
            pushes: [],
            nexts: [],
            pending: undefined,
            execution: undefined,
            onnext: NOOP,
            onstop: NOOP,
        });
    }
    Repeater.prototype.next = function (value) {
        swallow(value);
        var r = records.get(this);
        if (r === undefined) {
            throw new Error("WeakMap error");
        }
        if (r.nexts.length >= MAX_QUEUE_LENGTH) {
            throw new RepeaterOverflowError("No more than " + MAX_QUEUE_LENGTH + " pending calls to next are allowed on a single repeater.");
        }
        if (r.state <= Initial) {
            execute(r);
        }
        r.onnext(value);
        if (typeof r.buffer !== "undefined" && !r.buffer.empty) {
            var result = createIteration(r, r.buffer.remove());
            if (r.pushes.length) {
                var push_2 = r.pushes.shift();
                r.buffer.add(push_2.value);
                r.onnext = push_2.resolve;
            }
            return result;
        }
        else if (r.pushes.length) {
            var push_3 = r.pushes.shift();
            r.onnext = push_3.resolve;
            return createIteration(r, push_3.value);
        }
        else if (r.state >= Stopped) {
            finish(r);
            return createIteration(r, consumeExecution(r));
        }
        return new Promise(function (resolve) { return r.nexts.push({ resolve: resolve, value: value }); });
    };
    Repeater.prototype.return = function (value) {
        swallow(value);
        var r = records.get(this);
        if (r === undefined) {
            throw new Error("WeakMap error");
        }
        finish(r);
        // We override the execution because return should always return the value passed in.
        r.execution = Promise.resolve(r.execution).then(function () { return value; });
        return createIteration(r, consumeExecution(r));
    };
    Repeater.prototype.throw = function (err) {
        var r = records.get(this);
        if (r === undefined) {
            throw new Error("WeakMap error");
        }
        if (r.state <= Initial ||
            r.state >= Stopped ||
            (typeof r.buffer !== "undefined" && !r.buffer.empty)) {
            finish(r);
            // If r.err is already set, that mean the repeater has already produced an error, so we throw that error rather than the error passed in, because doing so might be more informative for the caller.
            if (r.err == null) {
                r.err = err;
            }
            return createIteration(r, consumeExecution(r));
        }
        return this.next(Promise.reject(err));
    };
    Repeater.prototype[Symbol.asyncIterator] = function () {
        return this;
    };
    // TODO: Remove these static methods from the class.
    Repeater.race = race;
    Repeater.merge = merge;
    Repeater.zip = zip;
    Repeater.latest = latest;
    return Repeater;
}());
/*** COMBINATOR FUNCTIONS ***/
// TODO: move these combinators to their own file.
function getIterators(values, options) {
    var e_3, _a;
    var iters = [];
    var _loop_1 = function (value) {
        if (value != null && typeof value[Symbol.asyncIterator] === "function") {
            iters.push(value[Symbol.asyncIterator]());
        }
        else if (value != null && typeof value[Symbol.iterator] === "function") {
            iters.push(value[Symbol.iterator]());
        }
        else {
            iters.push((function valueToAsyncIterator() {
                return __asyncGenerator(this, arguments, function valueToAsyncIterator_1() {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!options.yieldValues) return [3 /*break*/, 3];
                                return [4 /*yield*/, __await(value)];
                            case 1: return [4 /*yield*/, _a.sent()];
                            case 2:
                                _a.sent();
                                _a.label = 3;
                            case 3:
                                if (!options.returnValues) return [3 /*break*/, 5];
                                return [4 /*yield*/, __await(value)];
                            case 4: return [2 /*return*/, _a.sent()];
                            case 5: return [2 /*return*/];
                        }
                    });
                });
            })());
        }
    };
    try {
        for (var values_1 = __values(values), values_1_1 = values_1.next(); !values_1_1.done; values_1_1 = values_1.next()) {
            var value = values_1_1.value;
            _loop_1(value);
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (values_1_1 && !values_1_1.done && (_a = values_1.return)) _a.call(values_1);
        }
        finally { if (e_3) throw e_3.error; }
    }
    return iters;
}
// NOTE: whenever you see any variables called `advance` or `advances`, know that it is a hack to get around the fact that `Promise.race` leaks memory. These variables are intended to be set to the resolve function of a promise which is constructed and awaited as an alternative to Promise.race. For more information, see this comment in the Node.js issue tracker: https://github.com/nodejs/node/issues/17469#issuecomment-685216777.
function race(contenders) {
    var _this = this;
    var iters = getIterators(contenders, { returnValues: true });
    return new Repeater(function (push, stop) { return __awaiter(_this, void 0, void 0, function () {
        var advance, stopped, finalIteration, iteration, i_1, _loop_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!iters.length) {
                        stop();
                        return [2 /*return*/];
                    }
                    stopped = false;
                    stop.then(function () {
                        advance();
                        stopped = true;
                    });
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, , 5, 7]);
                    iteration = void 0;
                    i_1 = 0;
                    _loop_2 = function () {
                        var j, iters_1, iters_1_1, iter;
                        var e_4, _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    j = i_1;
                                    try {
                                        for (iters_1 = (e_4 = void 0, __values(iters)), iters_1_1 = iters_1.next(); !iters_1_1.done; iters_1_1 = iters_1.next()) {
                                            iter = iters_1_1.value;
                                            Promise.resolve(iter.next()).then(function (iteration) {
                                                if (iteration.done) {
                                                    stop();
                                                    if (finalIteration === undefined) {
                                                        finalIteration = iteration;
                                                    }
                                                }
                                                else if (i_1 === j) {
                                                    // This iterator has won, advance i and resolve the promise.
                                                    i_1++;
                                                    advance(iteration);
                                                }
                                            }, function (err) { return stop(err); });
                                        }
                                    }
                                    catch (e_4_1) { e_4 = { error: e_4_1 }; }
                                    finally {
                                        try {
                                            if (iters_1_1 && !iters_1_1.done && (_a = iters_1.return)) _a.call(iters_1);
                                        }
                                        finally { if (e_4) throw e_4.error; }
                                    }
                                    return [4 /*yield*/, new Promise(function (resolve) { return (advance = resolve); })];
                                case 1:
                                    iteration = _b.sent();
                                    if (!(iteration !== undefined)) return [3 /*break*/, 3];
                                    return [4 /*yield*/, push(iteration.value)];
                                case 2:
                                    _b.sent();
                                    _b.label = 3;
                                case 3: return [2 /*return*/];
                            }
                        });
                    };
                    _a.label = 2;
                case 2:
                    if (!!stopped) return [3 /*break*/, 4];
                    return [5 /*yield**/, _loop_2()];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 2];
                case 4: return [2 /*return*/, finalIteration && finalIteration.value];
                case 5:
                    stop();
                    return [4 /*yield*/, Promise.race(iters.map(function (iter) { return iter.return && iter.return(); }))];
                case 6:
                    _a.sent();
                    return [7 /*endfinally*/];
                case 7: return [2 /*return*/];
            }
        });
    }); });
}
function merge(contenders) {
    var _this = this;
    var iters = getIterators(contenders, { yieldValues: true });
    return new Repeater(function (push, stop) { return __awaiter(_this, void 0, void 0, function () {
        var advances, stopped, finalIteration;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!iters.length) {
                        stop();
                        return [2 /*return*/];
                    }
                    advances = [];
                    stopped = false;
                    stop.then(function () {
                        var e_5, _a;
                        stopped = true;
                        try {
                            for (var advances_1 = __values(advances), advances_1_1 = advances_1.next(); !advances_1_1.done; advances_1_1 = advances_1.next()) {
                                var advance = advances_1_1.value;
                                advance();
                            }
                        }
                        catch (e_5_1) { e_5 = { error: e_5_1 }; }
                        finally {
                            try {
                                if (advances_1_1 && !advances_1_1.done && (_a = advances_1.return)) _a.call(advances_1);
                            }
                            finally { if (e_5) throw e_5.error; }
                        }
                    });
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, , 3, 4]);
                    return [4 /*yield*/, Promise.all(iters.map(function (iter, i) { return __awaiter(_this, void 0, void 0, function () {
                            var iteration, _a;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        _b.trys.push([0, , 6, 9]);
                                        _b.label = 1;
                                    case 1:
                                        if (!!stopped) return [3 /*break*/, 5];
                                        Promise.resolve(iter.next()).then(function (iteration) { return advances[i](iteration); }, function (err) { return stop(err); });
                                        return [4 /*yield*/, new Promise(function (resolve) {
                                                advances[i] = resolve;
                                            })];
                                    case 2:
                                        iteration = _b.sent();
                                        if (!(iteration !== undefined)) return [3 /*break*/, 4];
                                        if (iteration.done) {
                                            finalIteration = iteration;
                                            return [2 /*return*/];
                                        }
                                        return [4 /*yield*/, push(iteration.value)];
                                    case 3:
                                        _b.sent();
                                        _b.label = 4;
                                    case 4: return [3 /*break*/, 1];
                                    case 5: return [3 /*break*/, 9];
                                    case 6:
                                        _a = iter.return;
                                        if (!_a) return [3 /*break*/, 8];
                                        return [4 /*yield*/, iter.return()];
                                    case 7:
                                        _a = (_b.sent());
                                        _b.label = 8;
                                    case 8:
                                        return [7 /*endfinally*/];
                                    case 9: return [2 /*return*/];
                                }
                            });
                        }); }))];
                case 2:
                    _a.sent();
                    return [2 /*return*/, finalIteration && finalIteration.value];
                case 3:
                    stop();
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/];
            }
        });
    }); });
}
function zip(contenders) {
    var _this = this;
    var iters = getIterators(contenders, { returnValues: true });
    return new Repeater(function (push, stop) { return __awaiter(_this, void 0, void 0, function () {
        var advance, stopped, iterations, values;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!iters.length) {
                        stop();
                        return [2 /*return*/, []];
                    }
                    stopped = false;
                    stop.then(function () {
                        advance();
                        stopped = true;
                    });
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, , 6, 8]);
                    _a.label = 2;
                case 2:
                    if (!!stopped) return [3 /*break*/, 5];
                    Promise.all(iters.map(function (iter) { return iter.next(); })).then(function (iterations) { return advance(iterations); }, function (err) { return stop(err); });
                    return [4 /*yield*/, new Promise(function (resolve) { return (advance = resolve); })];
                case 3:
                    iterations = _a.sent();
                    if (iterations === undefined) {
                        return [2 /*return*/];
                    }
                    values = iterations.map(function (iteration) { return iteration.value; });
                    if (iterations.some(function (iteration) { return iteration.done; })) {
                        return [2 /*return*/, values];
                    }
                    return [4 /*yield*/, push(values)];
                case 4:
                    _a.sent();
                    return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 8];
                case 6:
                    stop();
                    return [4 /*yield*/, Promise.all(iters.map(function (iter) { return iter.return && iter.return(); }))];
                case 7:
                    _a.sent();
                    return [7 /*endfinally*/];
                case 8: return [2 /*return*/];
            }
        });
    }); });
}
function latest(contenders) {
    var _this = this;
    var iters = getIterators(contenders, {
        yieldValues: true,
        returnValues: true,
    });
    return new Repeater(function (push, stop) { return __awaiter(_this, void 0, void 0, function () {
        var advance, advances, stopped, iterations_1, values_2;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!iters.length) {
                        stop();
                        return [2 /*return*/, []];
                    }
                    advances = [];
                    stopped = false;
                    stop.then(function () {
                        var e_6, _a;
                        advance();
                        try {
                            for (var advances_2 = __values(advances), advances_2_1 = advances_2.next(); !advances_2_1.done; advances_2_1 = advances_2.next()) {
                                var advance1 = advances_2_1.value;
                                advance1();
                            }
                        }
                        catch (e_6_1) { e_6 = { error: e_6_1 }; }
                        finally {
                            try {
                                if (advances_2_1 && !advances_2_1.done && (_a = advances_2.return)) _a.call(advances_2);
                            }
                            finally { if (e_6) throw e_6.error; }
                        }
                        stopped = true;
                    });
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, , 5, 7]);
                    Promise.all(iters.map(function (iter) { return iter.next(); })).then(function (iterations) { return advance(iterations); }, function (err) { return stop(err); });
                    return [4 /*yield*/, new Promise(function (resolve) { return (advance = resolve); })];
                case 2:
                    iterations_1 = _a.sent();
                    if (iterations_1 === undefined) {
                        return [2 /*return*/];
                    }
                    values_2 = iterations_1.map(function (iteration) { return iteration.value; });
                    if (iterations_1.every(function (iteration) { return iteration.done; })) {
                        return [2 /*return*/, values_2];
                    }
                    // We continuously yield and mutate the same values array so we shallow copy it each time it is pushed.
                    return [4 /*yield*/, push(values_2.slice())];
                case 3:
                    // We continuously yield and mutate the same values array so we shallow copy it each time it is pushed.
                    _a.sent();
                    return [4 /*yield*/, Promise.all(iters.map(function (iter, i) { return __awaiter(_this, void 0, void 0, function () {
                            var iteration;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (iterations_1[i].done) {
                                            return [2 /*return*/, iterations_1[i].value];
                                        }
                                        _a.label = 1;
                                    case 1:
                                        if (!!stopped) return [3 /*break*/, 4];
                                        Promise.resolve(iter.next()).then(function (iteration) { return advances[i](iteration); }, function (err) { return stop(err); });
                                        return [4 /*yield*/, new Promise(function (resolve) { return (advances[i] = resolve); })];
                                    case 2:
                                        iteration = _a.sent();
                                        if (iteration === undefined) {
                                            return [2 /*return*/, iterations_1[i].value];
                                        }
                                        else if (iteration.done) {
                                            return [2 /*return*/, iteration.value];
                                        }
                                        values_2[i] = iteration.value;
                                        return [4 /*yield*/, push(values_2.slice())];
                                    case 3:
                                        _a.sent();
                                        return [3 /*break*/, 1];
                                    case 4: return [2 /*return*/];
                                }
                            });
                        }); }))];
                case 4: return [2 /*return*/, _a.sent()];
                case 5:
                    stop();
                    return [4 /*yield*/, Promise.all(iters.map(function (iter) { return iter.return && iter.return(); }))];
                case 6:
                    _a.sent();
                    return [7 /*endfinally*/];
                case 7: return [2 /*return*/];
            }
        });
    }); });
}

class e{static global=new e;_extraRequestThreshold=262144;extraRequestThreshold(){return this._extraRequestThreshold}setExtraRequestThreshold(e){if(e<0)throw Error("extraRequestThreshold cannot be negative");this._extraRequestThreshold=e;}}

const NODE_ITEM_BYTE_LEN=40;const DEFAULT_NODE_SIZE=16;function calcTreeSize(e,t){t=Math.min(Math.max(+t,2),65535);let l=e,n=l;do n+=l=Math.ceil(l/t);while(1!==l)return 40*n}function generateLevelBounds(e,t){if(t<2)throw Error("Node size must be at least 2");if(0===e)throw Error("Number of items must be greater than 0");let l=e,n=l,o=[l];do n+=l=Math.ceil(l/t),o.push(l);while(1!==l)let r=[];for(let e of(l=n,o))r.push(l-e),l-=e;let i=[];for(let e=0;e<o.length;e++)i.push([r[e],r[e]+o[e]]);return i}async function*streamSearch(t,l,n,o){class r{_level;nodes;constructor(e,t){this._level=t,this.nodes=e;}level(){return this._level}startNodeIdx(){return this.nodes[0]}endNodeIdx(){return this.nodes[1]}extendEndNodeIdx(e){this.nodes[1]=e;}toString(){return `[NodeRange level: ${this._level}, nodes: ${this.nodes[0]}-${this.nodes[1]}]`}}let{minX:i,minY:s,maxX:d,maxY:u}=n,h=generateLevelBounds(t,l),a=h[0][0],N=[new r([0,1],h.length-1)];for(;0!=N.length;){let n=N.shift(),c=n.startNodeIdx(),g=c>=a,f=(()=>{let[,e]=h[n.level()],t=Math.min(n.endNodeIdx()+l,e);return g&&t<e?t+1:t})(),x=f-c,v=new DataView(await o(40*c,40*x));for(let l=c;l<f;l++){let o=l-c,h=40*o;if(d<v.getFloat64(h+0,!0)||u<v.getFloat64(h+8,!0)||i>v.getFloat64(h+16,!0)||s>v.getFloat64(h+24,!0))continue;let f=v.getBigUint64(h+32,!0);if(g){let e=(()=>{if(!(l<t-1))return null;{let e=(o+1)*40;return v.getBigUint64(e+32,!0)-f}})(),n=l-a;yield [Number(f),n,Number(e)];continue}let x=e.global.extraRequestThreshold()/40,m=N[N.length-1];if(void 0!==m&&m.level()==n.level()-1&&f<m.endNodeIdx()+x){m.extendEndNodeIdx(Number(f));continue}let E=(()=>{let e=n.level()-1;return new r([Number(f),Number(f)+1],e)})();void 0!==m&&(m.level(),E.level()),N.push(E);}}}

const magicbytes=new Uint8Array([102,103,98,3,102,103,98,0]);const SIZE_PREFIX_LEN=4;

class HttpReader{headerClient;header;headerLength;indexLength;nocache;constructor(e,t,r,a,n){this.headerClient=e,this.header=t,this.headerLength=r,this.indexLength=a,this.nocache=n;}static async open(t,s){let h;let o=new u(t,s),f=2024+(()=>{let e;let t=0;for(e=0;e<3;e++)t+=DEFAULT_NODE_SIZE**e*NODE_ITEM_BYTE_LEN;return t})();if(!new Uint8Array(await o.getRange(0,8,f,"header")).subarray(0,3).every((e,t)=>magicbytes[t]===e))throw Error("Not a FlatGeobuf file");if((h=new DataView(await o.getRange(8,4,f,"header")).getUint32(0,!0))>10485760||h<8)throw Error("Invalid header size");let d=await o.getRange(12,h,f,"header"),g=fromByteBuffer(new ByteBuffer(new Uint8Array(d))),c=calcTreeSize(g.featuresCount,g.indexNodeSize);return new HttpReader(o,g,h,c,s)}async *selectBbox(e$1){let r=this.lengthBeforeTree(),a=this.headerClient,n=async function(e,t){return a.getRange(r+e,t,0,"index")},i=[],h=[];for await(let t of streamSearch(this.header.featuresCount,this.header.indexNodeSize,e$1,n)){let[e$1,r]=t,[,,a]=t;if(a||(a=4),0==h.length){h.push([e$1,a,r]);continue}let n=h[h.length-1];e$1-(n[0]+n[1])>e.global.extraRequestThreshold()&&(i.push(h),h=[]),h.push([e$1,a,r]);}this.headerClient.logUsage("header+index"),h.length>0&&i.push(h);let l=i.flatMap(e=>this.readFeatureBatch(e,this.nocache));yield*Repeater.merge(l);}lengthBeforeTree(){return magicbytes.length+SIZE_PREFIX_LEN+this.headerLength}lengthBeforeFeatures(){return this.lengthBeforeTree()+this.indexLength}buildFeatureClient(e){return new u(this.headerClient.httpClient,e)}async *readFeatureBatch(e,t){let[r]=e[0],[a,n]=e[e.length-1],s=this.buildFeatureClient(t),i=a+n-r;for(let[t,,r]of e){let e=await this.readFeature(s,t,i);yield {id:r,feature:e},i=0;}s.logUsage("feature");}async readFeature(t,r,a){let n;let s=r+this.lengthBeforeFeatures();n=new DataView(await t.getRange(s,4,a,"feature length")).getUint32(0,!0);let i=new Uint8Array(await t.getRange(s+4,n,a,"feature data")),o=new Uint8Array(n+SIZE_PREFIX_LEN);o.set(i,SIZE_PREFIX_LEN);let l=new ByteBuffer(o);return l.setPosition(SIZE_PREFIX_LEN),Feature.getRootAsFeature(l)}}class u{httpClient;bytesEverUsed=0;bytesEverFetched=0;buffer=new ArrayBuffer(0);head=0;constructor(e,t){if("string"==typeof e)this.httpClient=new d(e,t);else if(e instanceof d)this.httpClient=e;else throw Error("Unknown source ")}async getRange(e,t,r,a){this.bytesEverUsed+=t;let n=e-this.head,s=n+t;if(n>=0&&s<=this.buffer.byteLength)return this.buffer.slice(n,s);let i=Math.max(t,r);return this.bytesEverFetched+=i,this.buffer=await this.httpClient.getRange(e,i,a),this.head=e,this.buffer.slice(0,t)}logUsage(e){e.split(" ")[0],(100*this.bytesEverUsed/this.bytesEverFetched).toFixed(2);}}class d{url;nocache;requestsEverMade=0;bytesEverRequested=0;constructor(e,t){this.url=e,this.nocache=t;}async getRange(e,t,r){this.requestsEverMade+=1,this.bytesEverRequested+=t;let a={Range:`bytes=${e}-${e+t-1}`};return this.nocache&&(a["Cache-Control"]="no-cache, no-store"),(await fetch(this.url,{headers:a})).arrayBuffer()}}

function inferGeometryType(t){let r;for(let f of t){if(r===GeometryType.Unknown)break;let t=f.getGeometry?toGeometryType(f.getGeometry().getType()):toGeometryType(f.geometry.type);void 0===r?r=t:r!==t&&(r=GeometryType.Unknown);}if(void 0===r)throw Error("Could not infer geometry type for collection of features.");return r}

function deserialize$2(t,r,n){if(!t.subarray(0,3).every((e,t)=>magicbytes[t]===e))throw Error("Not a FlatGeobuf file");let o=new ByteBuffer(t),l=o.readUint32(magicbytes.length);o.setPosition(magicbytes.length+SIZE_PREFIX_LEN);let u=fromByteBuffer(o);n&&n(u);let s=magicbytes.length+SIZE_PREFIX_LEN+l,{indexNodeSize:p,featuresCount:y}=u;p>0&&(s+=calcTreeSize(y,p));let g=[];for(;s<o.capacity();){let e=o.readUint32(s);o.setPosition(s+SIZE_PREFIX_LEN);let t=Feature.getRootAsFeature(o);g.push(r(g.length,t,u)),s+=SIZE_PREFIX_LEN+e;}return g}async function*deserializeStream$1(r,n,o){let a;let l=slice(r),u=async e=>await l.slice(e),s=new Uint8Array(await u(8));if(!s.subarray(0,3).every((e,t)=>magicbytes[t]===e))throw Error("Not a FlatGeobuf file");s=new Uint8Array(await u(4));let d=new ByteBuffer(s),p=d.readUint32(0);s=new Uint8Array(await u(p));let y=fromByteBuffer(d=new ByteBuffer(s));o&&o(y);let{indexNodeSize:c,featuresCount:h}=y;if(c>0){let e=calcTreeSize(h,c);await u(e);}let w=0;for(;a=await g(u,y,n,w++);)yield a;}async function*deserializeFiltered$1(e,t,r,n,o=!1){let a=await HttpReader.open(e,o);for await(let e of(n&&n(a.header),a.selectBbox(t)))yield r(e.id,e.feature,a.header);}async function g(t,r,n,o){let i=new Uint8Array(await t(4,"feature length"));if(0===i.byteLength)return;let l=new ByteBuffer(i),u=l.readUint32(0);i=new Uint8Array(await t(u,"feature data"));let f=new Uint8Array(u+4);return f.set(i,4),(l=new ByteBuffer(f)).setPosition(SIZE_PREFIX_LEN),n(o,Feature.getRootAsFeature(l),r)}function buildHeader(t,o=0){let a;let i=new Builder,l=0;t.columns&&(l=Header.createColumnsVector(i,t.columns.map(e=>(function(e,t){let r=e.createString(t.name);return Column.startColumn(e),Column.addName(e,r),Column.addType(e,t.type),Column.endColumn(e)})(i,e))));let u=i.createString("L1");o&&(Crs.startCrs(i),Crs.addCode(i,o),a=Crs.endCrs(i)),Header.startHeader(i),a&&Header.addCrs(i,a),Header.addFeaturesCount(i,BigInt(t.featuresCount)),Header.addGeometryType(i,t.geometryType),Header.addIndexNodeSize(i,0),l&&Header.addColumns(i,l),Header.addName(i,u);let f=Header.endHeader(i);return i.finishSizePrefixed(f),i.asUint8Array()}function mapColumn(e,t){return {name:t,type:function(e){if("boolean"==typeof e)return ColumnType.Bool;if("number"==typeof e)return e%1==0?ColumnType.Int:ColumnType.Double;if("string"==typeof e||null===e)return ColumnType.String;if("object"==typeof e)return ColumnType.Json;throw Error(`Unknown type (value '${e}')`)}(e[t]),title:null,description:null,width:-1,precision:-1,scale:-1,nullable:!0,unique:!1,primary_key:!1}}

/**
 * @module ol/proj/Units
 */


/**
 * @typedef {Object} MetersPerUnitLookup
 * @property {number} radians Radians
 * @property {number} degrees Degrees
 * @property {number} ft  Feet
 * @property {number} m Meters
 * @property {number} us-ft US feet
 */

/**
 * Meters per unit lookup table.
 * @const
 * @type {MetersPerUnitLookup}
 * @api
 */
const METERS_PER_UNIT$1 = {
  // use the radius of the Normal sphere
  'radians': 6370997 / (2 * Math.PI),
  'degrees': (2 * Math.PI * 6370997) / 360,
  'ft': 0.3048,
  'm': 1,
  'us-ft': 1200 / 3937,
};

/**
 * @module ol/proj/Projection
 */

/**
 * @typedef {Object} Options
 * @property {string} code The SRS identifier code, e.g. `EPSG:4326`.
 * @property {import("./Units.js").Units} [units] Units. Required unless a
 * proj4 projection is defined for `code`.
 * @property {import("../extent.js").Extent} [extent] The validity extent for the SRS.
 * @property {string} [axisOrientation='enu'] The axis orientation as specified in Proj4.
 * @property {boolean} [global=false] Whether the projection is valid for the whole globe.
 * @property {number} [metersPerUnit] The meters per unit for the SRS.
 * If not provided, the `units` are used to get the meters per unit from the {@link METERS_PER_UNIT}
 * lookup table.
 * @property {import("../extent.js").Extent} [worldExtent] The world extent for the SRS.
 * @property {function(number, import("../coordinate.js").Coordinate):number} [getPointResolution]
 * Function to determine resolution at a point. The function is called with a
 * `number` view resolution and a {@link module:ol/coordinate~Coordinate} as arguments, and returns
 * the `number` resolution in projection units at the passed coordinate. If this is `undefined`,
 * the default {@link module:ol/proj.getPointResolution} function will be used.
 */

/**
 * @classdesc
 * Projection definition class. One of these is created for each projection
 * supported in the application and stored in the {@link module:ol/proj} namespace.
 * You can use these in applications, but this is not required, as API params
 * and options use {@link module:ol/proj~ProjectionLike} which means the simple string
 * code will suffice.
 *
 * You can use {@link module:ol/proj.get} to retrieve the object for a particular
 * projection.
 *
 * The library includes definitions for `EPSG:4326` and `EPSG:3857`, together
 * with the following aliases:
 * * `EPSG:4326`: CRS:84, urn:ogc:def:crs:EPSG:6.6:4326,
 *     urn:ogc:def:crs:OGC:1.3:CRS84, urn:ogc:def:crs:OGC:2:84,
 *     http://www.opengis.net/gml/srs/epsg.xml#4326,
 *     urn:x-ogc:def:crs:EPSG:4326
 * * `EPSG:3857`: EPSG:102100, EPSG:102113, EPSG:900913,
 *     urn:ogc:def:crs:EPSG:6.18:3:3857,
 *     http://www.opengis.net/gml/srs/epsg.xml#3857
 *
 * If you use [proj4js](https://github.com/proj4js/proj4js), aliases can
 * be added using `proj4.defs()`. After all required projection definitions are
 * added, call the {@link module:ol/proj/proj4.register} function.
 *
 * @api
 */
class Projection {
  /**
   * @param {Options} options Projection options.
   */
  constructor(options) {
    /**
     * @private
     * @type {string}
     */
    this.code_ = options.code;

    /**
     * Units of projected coordinates. When set to `TILE_PIXELS`, a
     * `this.extent_` and `this.worldExtent_` must be configured properly for each
     * tile.
     * @private
     * @type {import("./Units.js").Units}
     */
    this.units_ = /** @type {import("./Units.js").Units} */ (options.units);

    /**
     * Validity extent of the projection in projected coordinates. For projections
     * with `TILE_PIXELS` units, this is the extent of the tile in
     * tile pixel space.
     * @private
     * @type {import("../extent.js").Extent}
     */
    this.extent_ = options.extent !== undefined ? options.extent : null;

    /**
     * Extent of the world in EPSG:4326. For projections with
     * `TILE_PIXELS` units, this is the extent of the tile in
     * projected coordinate space.
     * @private
     * @type {import("../extent.js").Extent}
     */
    this.worldExtent_ =
      options.worldExtent !== undefined ? options.worldExtent : null;

    /**
     * @private
     * @type {string}
     */
    this.axisOrientation_ =
      options.axisOrientation !== undefined ? options.axisOrientation : 'enu';

    /**
     * @private
     * @type {boolean}
     */
    this.global_ = options.global !== undefined ? options.global : false;

    /**
     * @private
     * @type {boolean}
     */
    this.canWrapX_ = !!(this.global_ && this.extent_);

    /**
     * @private
     * @type {function(number, import("../coordinate.js").Coordinate):number|undefined}
     */
    this.getPointResolutionFunc_ = options.getPointResolution;

    /**
     * @private
     * @type {import("../tilegrid/TileGrid.js").default}
     */
    this.defaultTileGrid_ = null;

    /**
     * @private
     * @type {number|undefined}
     */
    this.metersPerUnit_ = options.metersPerUnit;
  }

  /**
   * @return {boolean} The projection is suitable for wrapping the x-axis
   */
  canWrapX() {
    return this.canWrapX_;
  }

  /**
   * Get the code for this projection, e.g. 'EPSG:4326'.
   * @return {string} Code.
   * @api
   */
  getCode() {
    return this.code_;
  }

  /**
   * Get the validity extent for this projection.
   * @return {import("../extent.js").Extent} Extent.
   * @api
   */
  getExtent() {
    return this.extent_;
  }

  /**
   * Get the units of this projection.
   * @return {import("./Units.js").Units} Units.
   * @api
   */
  getUnits() {
    return this.units_;
  }

  /**
   * Get the amount of meters per unit of this projection.  If the projection is
   * not configured with `metersPerUnit` or a units identifier, the return is
   * `undefined`.
   * @return {number|undefined} Meters.
   * @api
   */
  getMetersPerUnit() {
    return this.metersPerUnit_ || METERS_PER_UNIT$1[this.units_];
  }

  /**
   * Get the world extent for this projection.
   * @return {import("../extent.js").Extent} Extent.
   * @api
   */
  getWorldExtent() {
    return this.worldExtent_;
  }

  /**
   * Get the axis orientation of this projection.
   * Example values are:
   * enu - the default easting, northing, elevation.
   * neu - northing, easting, up - useful for "lat/long" geographic coordinates,
   *     or south orientated transverse mercator.
   * wnu - westing, northing, up - some planetary coordinate systems have
   *     "west positive" coordinate systems
   * @return {string} Axis orientation.
   * @api
   */
  getAxisOrientation() {
    return this.axisOrientation_;
  }

  /**
   * Is this projection a global projection which spans the whole world?
   * @return {boolean} Whether the projection is global.
   * @api
   */
  isGlobal() {
    return this.global_;
  }

  /**
   * Set if the projection is a global projection which spans the whole world
   * @param {boolean} global Whether the projection is global.
   * @api
   */
  setGlobal(global) {
    this.global_ = global;
    this.canWrapX_ = !!(global && this.extent_);
  }

  /**
   * @return {import("../tilegrid/TileGrid.js").default} The default tile grid.
   */
  getDefaultTileGrid() {
    return this.defaultTileGrid_;
  }

  /**
   * @param {import("../tilegrid/TileGrid.js").default} tileGrid The default tile grid.
   */
  setDefaultTileGrid(tileGrid) {
    this.defaultTileGrid_ = tileGrid;
  }

  /**
   * Set the validity extent for this projection.
   * @param {import("../extent.js").Extent} extent Extent.
   * @api
   */
  setExtent(extent) {
    this.extent_ = extent;
    this.canWrapX_ = !!(this.global_ && extent);
  }

  /**
   * Set the world extent for this projection.
   * @param {import("../extent.js").Extent} worldExtent World extent
   *     [minlon, minlat, maxlon, maxlat].
   * @api
   */
  setWorldExtent(worldExtent) {
    this.worldExtent_ = worldExtent;
  }

  /**
   * Set the getPointResolution function (see {@link module:ol/proj.getPointResolution}
   * for this projection.
   * @param {function(number, import("../coordinate.js").Coordinate):number} func Function
   * @api
   */
  setGetPointResolution(func) {
    this.getPointResolutionFunc_ = func;
  }

  /**
   * Get the custom point resolution function for this projection (if set).
   * @return {function(number, import("../coordinate.js").Coordinate):number|undefined} The custom point
   * resolution function (if set).
   */
  getPointResolutionFunc() {
    return this.getPointResolutionFunc_;
  }
}

/**
 * @module ol/proj/epsg3857
 */

/**
 * Radius of WGS84 sphere
 *
 * @const
 * @type {number}
 */
const RADIUS$1 = 6378137;

/**
 * @const
 * @type {number}
 */
const HALF_SIZE = Math.PI * RADIUS$1;

/**
 * @const
 * @type {import("../extent.js").Extent}
 */
const EXTENT$1 = [-HALF_SIZE, -HALF_SIZE, HALF_SIZE, HALF_SIZE];

/**
 * @const
 * @type {import("../extent.js").Extent}
 */
const WORLD_EXTENT = [-180, -85, 180, 85];

/**
 * Maximum safe value in y direction
 * @const
 * @type {number}
 */
const MAX_SAFE_Y = RADIUS$1 * Math.log(Math.tan(Math.PI / 2));

/**
 * @classdesc
 * Projection object for web/spherical Mercator (EPSG:3857).
 */
class EPSG3857Projection extends Projection {
  /**
   * @param {string} code Code.
   */
  constructor(code) {
    super({
      code: code,
      units: 'm',
      extent: EXTENT$1,
      global: true,
      worldExtent: WORLD_EXTENT,
      getPointResolution: function (resolution, point) {
        return resolution / Math.cosh(point[1] / RADIUS$1);
      },
    });
  }
}

/**
 * Projections equal to EPSG:3857.
 *
 * @const
 * @type {Array<import("./Projection.js").default>}
 */
const PROJECTIONS$1 = [
  new EPSG3857Projection('EPSG:3857'),
  new EPSG3857Projection('EPSG:102100'),
  new EPSG3857Projection('EPSG:102113'),
  new EPSG3857Projection('EPSG:900913'),
  new EPSG3857Projection('http://www.opengis.net/def/crs/EPSG/0/3857'),
  new EPSG3857Projection('http://www.opengis.net/gml/srs/epsg.xml#3857'),
];

/**
 * Transformation from EPSG:4326 to EPSG:3857.
 *
 * @param {Array<number>} input Input array of coordinate values.
 * @param {Array<number>} [output] Output array of coordinate values.
 * @param {number} [dimension] Dimension (default is `2`).
 * @param {number} [stride] Stride (default is `dimension`).
 * @return {Array<number>} Output array of coordinate values.
 */
function fromEPSG4326(input, output, dimension, stride) {
  const length = input.length;
  dimension = dimension > 1 ? dimension : 2;
  stride = stride ?? dimension;
  if (output === undefined) {
    if (dimension > 2) {
      // preserve values beyond second dimension
      output = input.slice();
    } else {
      output = new Array(length);
    }
  }
  for (let i = 0; i < length; i += stride) {
    output[i] = (HALF_SIZE * input[i]) / 180;
    let y = RADIUS$1 * Math.log(Math.tan((Math.PI * (+input[i + 1] + 90)) / 360));
    if (y > MAX_SAFE_Y) {
      y = MAX_SAFE_Y;
    } else if (y < -MAX_SAFE_Y) {
      y = -MAX_SAFE_Y;
    }
    output[i + 1] = y;
  }
  return output;
}

/**
 * Transformation from EPSG:3857 to EPSG:4326.
 *
 * @param {Array<number>} input Input array of coordinate values.
 * @param {Array<number>} [output] Output array of coordinate values.
 * @param {number} [dimension] Dimension (default is `2`).
 * @param {number} [stride] Stride (default is `dimension`).
 * @return {Array<number>} Output array of coordinate values.
 */
function toEPSG4326(input, output, dimension, stride) {
  const length = input.length;
  dimension = dimension > 1 ? dimension : 2;
  stride = stride ?? dimension;
  if (output === undefined) {
    if (dimension > 2) {
      // preserve values beyond second dimension
      output = input.slice();
    } else {
      output = new Array(length);
    }
  }
  for (let i = 0; i < length; i += stride) {
    output[i] = (180 * input[i]) / HALF_SIZE;
    output[i + 1] =
      (360 * Math.atan(Math.exp(input[i + 1] / RADIUS$1))) / Math.PI - 90;
  }
  return output;
}

/**
 * @module ol/proj/epsg4326
 */

/**
 * Semi-major radius of the WGS84 ellipsoid.
 *
 * @const
 * @type {number}
 */
const RADIUS = 6378137;

/**
 * Extent of the EPSG:4326 projection which is the whole world.
 *
 * @const
 * @type {import("../extent.js").Extent}
 */
const EXTENT = [-180, -90, 180, 90];

/**
 * @const
 * @type {number}
 */
const METERS_PER_UNIT = (Math.PI * RADIUS) / 180;

/**
 * @classdesc
 * Projection object for WGS84 geographic coordinates (EPSG:4326).
 *
 * Note that OpenLayers does not strictly comply with the EPSG definition.
 * The EPSG registry defines 4326 as a CRS for Latitude,Longitude (y,x).
 * OpenLayers treats EPSG:4326 as a pseudo-projection, with x,y coordinates.
 */
class EPSG4326Projection extends Projection {
  /**
   * @param {string} code Code.
   * @param {string} [axisOrientation] Axis orientation.
   */
  constructor(code, axisOrientation) {
    super({
      code: code,
      units: 'degrees',
      extent: EXTENT,
      axisOrientation: axisOrientation,
      global: true,
      metersPerUnit: METERS_PER_UNIT,
      worldExtent: EXTENT,
    });
  }
}

/**
 * Projections equal to EPSG:4326.
 *
 * @const
 * @type {Array<import("./Projection.js").default>}
 */
const PROJECTIONS = [
  new EPSG4326Projection('CRS:84'),
  new EPSG4326Projection('EPSG:4326', 'neu'),
  new EPSG4326Projection('urn:ogc:def:crs:OGC:1.3:CRS84'),
  new EPSG4326Projection('urn:ogc:def:crs:OGC:2:84'),
  new EPSG4326Projection('http://www.opengis.net/def/crs/OGC/1.3/CRS84'),
  new EPSG4326Projection('http://www.opengis.net/gml/srs/epsg.xml#4326', 'neu'),
  new EPSG4326Projection('http://www.opengis.net/def/crs/EPSG/0/4326', 'neu'),
];

/**
 * @module ol/proj/projections
 */


/**
 * Add a projection to the cache.
 * @param {string} code The projection code.
 * @param {import("./Projection.js").default} projection The projection to cache.
 */
function add$1(code, projection) {
}

/**
 * @module ol/proj/transforms
 */

/**
 * @private
 * @type {!Object<string, Object<string, import("../proj.js").TransformFunction>>}
 */
let transforms = {};

/**
 * Registers a conversion function to convert coordinates from the source
 * projection to the destination projection.
 *
 * @param {import("./Projection.js").default} source Source.
 * @param {import("./Projection.js").default} destination Destination.
 * @param {import("../proj.js").TransformFunction} transformFn Transform.
 */
function add(source, destination, transformFn) {
  const sourceCode = source.getCode();
  const destinationCode = destination.getCode();
  if (!(sourceCode in transforms)) {
    transforms[sourceCode] = {};
  }
  transforms[sourceCode][destinationCode] = transformFn;
}

/**
 * @module ol/proj
 */


/**
 * @param {Array<number>} input Input coordinate array.
 * @param {Array<number>} [output] Output array of coordinate values.
 * @return {Array<number>} Output coordinate array (new array, same coordinate
 *     values).
 */
function cloneTransform(input, output) {
  if (output !== undefined) {
    for (let i = 0, ii = input.length; i < ii; ++i) {
      output[i] = input[i];
    }
    output = output;
  } else {
    output = input.slice();
  }
  return output;
}

/**
 * Add a Projection object to the list of supported projections that can be
 * looked up by their code.
 *
 * @param {Projection} projection Projection instance.
 * @api
 */
function addProjection(projection) {
  add$1(projection.getCode());
  add(projection, projection, cloneTransform);
}

/**
 * @param {Array<Projection>} projections Projections.
 */
function addProjections(projections) {
  projections.forEach(addProjection);
}

/**
 * Registers transformation functions that don't alter coordinates. Those allow
 * to transform between projections with equal meaning.
 *
 * @param {Array<Projection>} projections Projections.
 * @api
 */
function addEquivalentProjections(projections) {
  addProjections(projections);
  projections.forEach(function (source) {
    projections.forEach(function (destination) {
      if (source !== destination) {
        add(source, destination, cloneTransform);
      }
    });
  });
}

/**
 * Registers transformation functions to convert coordinates in any projection
 * in projection1 to any projection in projection2.
 *
 * @param {Array<Projection>} projections1 Projections with equal
 *     meaning.
 * @param {Array<Projection>} projections2 Projections with equal
 *     meaning.
 * @param {TransformFunction} forwardTransform Transformation from any
 *   projection in projection1 to any projection in projection2.
 * @param {TransformFunction} inverseTransform Transform from any projection
 *   in projection2 to any projection in projection1..
 */
function addEquivalentTransforms(
  projections1,
  projections2,
  forwardTransform,
  inverseTransform,
) {
  projections1.forEach(function (projection1) {
    projections2.forEach(function (projection2) {
      add(projection1, projection2, forwardTransform);
      add(projection2, projection1, inverseTransform);
    });
  });
}

/**
 * Add transforms to and from EPSG:4326 and EPSG:3857.  This function is called
 * by when this module is executed and should only need to be called again after
 * `clearAllProjections()` is called (e.g. in tests).
 */
function addCommon() {
  // Add transformations that don't alter coordinates to convert within set of
  // projections with equal meaning.
  addEquivalentProjections(PROJECTIONS$1);
  addEquivalentProjections(PROJECTIONS);
  // Add transformations to convert EPSG:4326 like coordinates to EPSG:3857 like
  // coordinates and back.
  addEquivalentTransforms(
    PROJECTIONS,
    PROJECTIONS$1,
    fromEPSG4326,
    toEPSG4326,
  );
}

addCommon();

function parseGeometry(e){let r,n;let i=e.coordinates,l=[],a=[],p=toGeometryType(e.type),s=0;switch(e.type){case"Point":case"MultiPoint":case"LineString":flat(i,l,a);break;case"MultiLineString":case"Polygon":flat(i,l,a),i.length>1&&(r=i.map(e=>s+=e.length));break;case"MultiPolygon":n=i.map(e=>({type:"Polygon",coordinates:e})).map(parseGeometry);}return {xy:l,z:a.length>0?a:void 0,ends:r,type:p,parts:n}}function parseGC(e){let t=toGeometryType(e.type),r=[];for(let t=0;t<e.geometries.length;t++){let o=e.geometries[t];"GeometryCollection"===o.type?r.push(parseGC(o)):r.push(parseGeometry(o));}return {type:t,parts:r}}function fromGeometry(t,o){let n=o;if(n===GeometryType.Unknown&&(n=t.type()),n===GeometryType.GeometryCollection){let r=[];for(let e=0;e<t.partsLength();e++){let o=t.parts(e),n=o.type();r.push(fromGeometry(o,n));}return {type:GeometryType[n],geometries:r}}if(n===GeometryType.MultiPolygon){let r=[];for(let o=0;o<t.partsLength();o++)r.push(fromGeometry(t.parts(o),GeometryType.Polygon));return {type:GeometryType[n],coordinates:r.map(e=>e.coordinates)}}let i=function(t,o){let n=t.xyArray(),i=t.zArray();switch(o){case GeometryType.Point:{let e=Array.from(n);return i&&e.push(i[0]),e}case GeometryType.MultiPoint:case GeometryType.LineString:return pairFlatCoordinates(n,i);case GeometryType.MultiLineString:case GeometryType.Polygon:return function(e,t,o){let n;if(!o||0===o.length)return [pairFlatCoordinates(e,t)];let i=0,l=Array.from(o).map(t=>e.slice(i,i=t<<1));return t&&(i=0,n=Array.from(o).map(e=>t.slice(i,i=e))),l.map((e,t)=>pairFlatCoordinates(e,n?n[t]:void 0))}(n,i,t.endsArray())}}(t,n);return {type:GeometryType[n],coordinates:i}}

function fromFeature(t,o,m){let p=m.columns;return {type:"Feature",id:t,geometry:fromGeometry(o.geometry(),m.geometryType),properties:parseProperties(o,p)}}

function serialize$1(e,o=0){let i=function(e){let t=e.features[0].properties,r=null;return t&&(r=Object.keys(t).map(e=>mapColumn(t,e))),{geometryType:inferGeometryType(e.features),columns:r,envelope:null,featuresCount:e.features.length,indexNodeSize:0,crs:null,title:null,description:null,metadata:null}}(e),l=buildHeader(i,o),f=e.features.map(e=>buildFeature("GeometryCollection"===e.geometry.type?parseGC(e.geometry):parseGeometry(e.geometry),e.properties,i)),p=f.map(e=>e.length).reduce((e,t)=>e+t),c=new Uint8Array(magicbytes.length+l.length+p);c.set(l,magicbytes.length);let g=magicbytes.length+l.length;for(let e of f)c.set(e,g),g+=e.length;return c.set(magicbytes),c}function deserialize$1(t,r){return {type:"FeatureCollection",features:deserialize$2(t,fromFeature,r)}}function deserializeStream(t,r){return deserializeStream$1(t,fromFeature,r)}function deserializeFiltered(t,r,n,o=!1){return deserializeFiltered$1(t,r,fromFeature,n,o)}

function serialize(e,i=0){return serialize$1(e,i)}function deserialize(a,t,s,n=!1){return a instanceof Uint8Array?deserialize$1(a,s):a instanceof ReadableStream?deserializeStream(a,s):deserializeFiltered(a,t,s,n)}

const geojson = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    deserialize,
    serialize
}, Symbol.toStringTag, { value: 'Module' }));

export { Column, Feature, Geometry, geojson };
