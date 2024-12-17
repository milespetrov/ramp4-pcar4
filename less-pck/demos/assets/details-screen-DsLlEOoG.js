import { fA as defineComponent, fT as ref, fY as onMounted, fI as openBlock, fM as createElementBlock, fL as createBaseVNode, fR as Fragment, fN as renderList, fO as normalizeClass, hu as normalizeStyle, g0 as createCommentVNode, fP as toDisplayString, kO as _export_sfc, k_ as useDetailsStore, fE as computed, fG as resolveDirective, fH as withDirectives, f_ as createVNode, iz as withModifiers, fB as useI18n, o0 as useLayerStore, fW as onBeforeMount, fX as watch, fZ as onBeforeUnmount, fJ as createBlock, fQ as unref, fS as inject, pI as linkifyHtml, hQ as resolveDynamicComponent, l6 as LayerType, pJ as GeometryType, g2 as GlobalEvents, f$ as createTextVNode, fF as resolveComponent, fK as withCtx } from './main-3BNeFVQJ.js';
import { T as Toggle } from './toggle-switch-control-KEgnNqnu.js';
import './preload-helper-dJJaZANz.js';

const _hoisted_1$7 = {
  key: 0,
  class: "relative"
};
const _hoisted_2$6 = {
  key: 0,
  class: "relative"
};
const _hoisted_3$2 = ["innerHTML"];
const _hoisted_4$2 = ["src"];
const _hoisted_5$2 = {
  key: 1,
  class: "w-32 h-32"
};
const _hoisted_6$2 = { class: "symbologyIcon" };
const _hoisted_7$2 = ["innerHTML"];
const _hoisted_8$2 = ["src"];
const _hoisted_9$2 = { class: "badge z-50 rounded-full text-white absolute h-10 w-10 p-8 inline-flex items-center justify-center" };
const _hoisted_10$2 = {
  key: 0,
  class: "px-5"
};
const _hoisted_11$2 = {
  key: 1,
  class: "inline-flex justify-center items-center relative"
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "symbology-stack",
  props: {
    layer: { type: Object, required: true },
    result: { type: Object, required: true }
  },
  setup(__props) {
    const props = __props;
    const stack = ref([]);
    onMounted(() => {
      stack.value = props.layer.legend;
    });
    return (_ctx, _cache) => {
      return __props.result.loaded ? (openBlock(), createElementBlock("div", _hoisted_1$7, [
        createBaseVNode("div", {
          class: normalizeClass(__props.result.items.length === 0 ? "opacity-50" : "")
        }, [
          stack.value.length > 1 ? (openBlock(), createElementBlock("div", _hoisted_2$6, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(stack.value.slice(0, 3).reverse(), (item, idx) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(["absolute", [idx == 0 ? "symbol-0" : idx == 1 ? "left-3" : "left-6"]]),
                style: normalizeStyle({ "z-index": 3 - idx }),
                key: idx
              }, [
                stack.value[idx].svgcode ? (openBlock(), createElementBlock("span", {
                  key: 0,
                  class: "symbologyIcon w-28 h-28",
                  innerHTML: stack.value[idx].svgcode
                }, null, 8, _hoisted_3$2)) : stack.value[idx].imgUrl ? (openBlock(), createElementBlock("img", {
                  key: 1,
                  class: "symbologyIcon w-28 h-28",
                  src: stack.value[idx].imgUrl
                }, null, 8, _hoisted_4$2)) : createCommentVNode("", true)
              ], 6);
            }), 128))
          ])) : stack.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_5$2, [
            createBaseVNode("div", _hoisted_6$2, [
              stack.value[0].svgcode ? (openBlock(), createElementBlock("span", {
                key: 0,
                innerHTML: stack.value[0].svgcode
              }, null, 8, _hoisted_7$2)) : stack.value[0].imgUrl ? (openBlock(), createElementBlock("img", {
                key: 1,
                class: "symbologyIcon w-full h-full",
                src: stack.value[0].imgUrl
              }, null, 8, _hoisted_8$2)) : createCommentVNode("", true)
            ])
          ])) : createCommentVNode("", true)
        ], 2),
        createBaseVNode("div", _hoisted_9$2, [
          __props.result.loaded ? (openBlock(), createElementBlock("div", _hoisted_10$2, toDisplayString(__props.result.items.length), 1)) : createCommentVNode("", true)
        ])
      ])) : (openBlock(), createElementBlock("div", _hoisted_11$2, _cache[0] || (_cache[0] = [
        createBaseVNode("div", { class: "symbologyIcon h-32 w-32" }, [
          createBaseVNode("div", { class: "relative animate-spin spinner h-24 w-24" })
        ], -1)
      ])));
    };
  }
});

const SymbologyStack = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-e0b0309a"]]);

const _hoisted_1$6 = ["content"];
const _hoisted_2$5 = { class: "symbologyLayerName truncate" };
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "symbology-item",
  props: {
    layer: { type: Object, required: true },
    result: { type: Object, required: true },
    selected: { type: Boolean, required: true }
  },
  setup(__props) {
    const detailsStore = useDetailsStore();
    const detailProperties = computed(() => detailsStore.properties);
    const props = __props;
    const layerName = () => {
      const layer = props.layer;
      if (layer && detailProperties.value[layer.id] && detailProperties.value[layer.id].name) {
        return detailProperties.value[layer.id].name;
      }
      return layer?.name ?? "";
    };
    return (_ctx, _cache) => {
      const _directive_tippy = resolveDirective("tippy");
      return withDirectives((openBlock(), createElementBlock("button", {
        class: normalizeClass(["flex flex-grow justify-start items-center px-7 py-10 default-focus-style symbologyStackButton truncate", __props.selected ? "detailsButtonSelected" : "px-11"]),
        onClick: _cache[0] || (_cache[0] = withModifiers(() => {
        }, ["stop"])),
        content: layerName()
      }, [
        createVNode(SymbologyStack, {
          class: "symbStack w-32 h-32 mr-10",
          layer: __props.layer,
          result: __props.result
        }, null, 8, ["layer", "result"]),
        createBaseVNode("div", _hoisted_2$5, toDisplayString(layerName()), 1)
      ], 10, _hoisted_1$6)), [
        [_directive_tippy, { placement: "right", sticky: true }]
      ]);
    };
  }
});

const _hoisted_1$5 = ["content"];
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "symbology-list",
  props: {
    results: { type: Object, required: true },
    selected: { type: String, required: true }
  },
  emits: ["selection-changed"],
  setup(__props, { emit: __emit }) {
    const { t } = useI18n();
    const layerStore = useLayerStore();
    const el = ref();
    const blurEvent = () => {
      el.value._tippy.hide();
    };
    const keyupEvent = (e) => {
      const evt = e;
      if (evt.key === "Tab" && el.value?.matches(":focus")) {
        el.value._tippy.show();
      }
    };
    const emit = __emit;
    const props = __props;
    const selectedLayer = ref("");
    const watchers = ref([]);
    const expanded = ref(false);
    const hovering = ref(false);
    const getLayerInfo = (uid) => {
      let layer = layerStore.getLayerByUid(uid);
      return layer;
    };
    const handleItemClick = (uid) => {
      selectedLayer.value = uid;
      emit("selection-changed", uid);
      expanded.value = false;
    };
    const handleMouseOver = () => {
      if (!hovering.value) {
        setTimeout(() => {
          expanded.value = hovering.value;
        }, 500);
      }
      hovering.value = true;
    };
    const handleMouseLeave = () => {
      expanded.value = hovering.value = false;
    };
    const handleItemFocus = () => {
      if (!hovering.value) {
        expanded.value = true;
      }
      hovering.value = true;
    };
    const handleItemBlur = () => {
      expanded.value = hovering.value = false;
    };
    onBeforeMount(() => {
      watchers.value.push(
        watch(props, () => {
          selectedLayer.value = props.selected;
        })
      );
    });
    onMounted(() => {
      el.value?.addEventListener("blur", blurEvent);
      el.value?.addEventListener("keyup", keyupEvent);
    });
    onBeforeUnmount(() => {
      watchers.value.forEach((unwatch) => unwatch());
      el.value?.removeEventListener("blur", blurEvent);
      el.value?.removeEventListener("keyup", keyupEvent);
    });
    return (_ctx, _cache) => {
      const _directive_focus_item = resolveDirective("focus-item");
      const _directive_focus_list = resolveDirective("focus-list");
      const _directive_tippy = resolveDirective("tippy");
      return withDirectives((openBlock(), createElementBlock("div", {
        class: normalizeClass(["symbology-list absolute overflow-hidden z-50 p-0 w-48 bg-white text-sm inline-flex flex-col", { "symbology-list-expanded": expanded.value }]),
        onMouseover: handleMouseOver,
        onMouseleave: handleMouseLeave,
        onFocus: handleItemFocus,
        onBlur: withModifiers(handleItemBlur, ["self"]),
        content: unref(t)("details.layers.results.list.tooltip"),
        ref_key: "el",
        ref: el
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(props.results, (item, idx) => {
          return openBlock(), createElementBlock("div", {
            class: "flex justify-start relative",
            key: idx
          }, [
            withDirectives((openBlock(), createBlock(_sfc_main$6, {
              key: item.uid,
              layer: getLayerInfo(item.uid),
              result: item,
              selected: item.uid === selectedLayer.value,
              onClick: ($event) => handleItemClick(item.uid)
            }, null, 8, ["layer", "result", "selected", "onClick"])), [
              [_directive_focus_item]
            ])
          ]);
        }), 128))
      ], 42, _hoisted_1$5)), [
        [_directive_focus_list],
        [_directive_tippy, {
          trigger: "manual",
          placement: "top-start"
        }]
      ]);
    };
  }
});

const _hoisted_1$4 = { class: "inline font-bold" };
const _hoisted_2$4 = ["innerHTML"];
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "esri-default",
  props: {
    fixtureFields: {
      type: Object,
      required: false
    },
    fields: {
      type: Object,
      required: true
    },
    identifyData: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const { t } = useI18n();
    const iApi = inject("iApi");
    const props = __props;
    const findAndDelete = (fields, propertyType, property, helper) => {
      const field = fields.find((f) => f[propertyType].toLowerCase() === property.toLowerCase());
      if (field) delete helper[field.name];
    };
    const itemData = () => {
      const clonePayload = Object.assign({}, props.identifyData.data);
      findAndDelete(props.fields, "type", "geometry", clonePayload);
      if (!iApi?.ui.exposeOids) {
        findAndDelete(props.fields, "type", "oid", clonePayload);
      }
      if (!iApi?.ui.exposeMeasurements) {
        findAndDelete(props.fields, "name", "shape_length", clonePayload);
        findAndDelete(props.fields, "name", "shape_area", clonePayload);
      }
      const fieldsMetadata = {};
      props.fields.forEach((field) => {
        const checkField = props.fixtureFields?.find((item) => field.name === item.field);
        fieldsMetadata[field.name] = {
          name: checkField?.alias || field.alias || field.name,
          type: field.type,
          visible: checkField?.visible ?? true
        };
      });
      const displayMetadata = {};
      Object.keys(clonePayload).forEach((key) => {
        const fieldMD = fieldsMetadata[key];
        if (fieldMD && fieldMD.visible) {
          const cloneValue = clonePayload[key];
          displayMetadata[key] = {
            value: typeof cloneValue === "number" ? iApi?.ui.formatNumber(cloneValue) : cloneValue,
            alias: fieldMD.name,
            type: fieldMD.type
          };
        }
      });
      for (const [key] of Object.entries(displayMetadata)) {
        if (iApi.ui.isPlainText(displayMetadata[key].value)) {
          displayMetadata[key].value = iApi.ui.escapeHtml(displayMetadata[key].value);
        }
      }
      return displayMetadata;
    };
    const formatValues = (html, alias, type) => {
      switch (type) {
        case "date":
          return makeDate(html);
        default:
          return makeHtmlLink(html, alias);
      }
    };
    const makeHtmlLink = (html, alias) => {
      if (!html) {
        return html;
      }
      if (!!html.trim().match(/\.(jpeg|jpg|gif|png)$/) || !!html.trim().match(
        /^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i
        //eslint-disable-line
      )) {
        return `<img src="${html}" alt="${t("details.item.alert.defaultAltText", { alias })}" />`;
      }
      const classes = "underline text-blue-700 break-all";
      const div = document.createElement("div");
      div.innerHTML = html.trim();
      if (div.firstElementChild?.tagName == "A") {
        div.firstElementChild.className = classes;
        return div.innerHTML;
      } else {
        const options = {
          className: classes,
          target: "_blank",
          validate: {
            url: (value) => /^https?:\/\//.test(value)
            // only links that begin with a protocol will be hyperlinked
          }
        };
        return linkifyHtml(html, options);
      }
    };
    const makeDate = (html) => {
      const numericDate = parseInt(html);
      if (isNaN(numericDate)) {
        return html;
      }
      const formattedDate = new Date(numericDate);
      return formattedDate.toISOString().split("T")[0];
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(itemData(), (val, name, itemIdx) => {
          return openBlock(), createElementBlock("div", {
            class: "p-5 pl-3 flex justify-end flex-wrap even:bg-gray-300",
            key: itemIdx
          }, [
            createBaseVNode("span", _hoisted_1$4, toDisplayString(val.alias), 1),
            _cache[0] || (_cache[0] = createBaseVNode("span", { class: "flex-auto" }, null, -1)),
            createBaseVNode("span", {
              class: "inline",
              innerHTML: formatValues(val.value, val.alias, val.type)
            }, null, 8, _hoisted_2$4)
          ]);
        }), 128))
      ]);
    };
  }
});

const _hoisted_1$3 = ["innerHTML"];
const _hoisted_2$3 = { key: 1 };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "html-default",
  props: {
    identifyData: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _cache) => {
      return __props.identifyData ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: "whitespace-pre-wrap break-words h-full overflow-auto",
        innerHTML: __props.identifyData.data.data ?? __props.identifyData.data
      }, null, 8, _hoisted_1$3)) : (openBlock(), createElementBlock("div", _hoisted_2$3, toDisplayString(unref(t)("details.layers.results.empty")), 1));
    };
  }
});

const _hoisted_1$2 = { class: "relative flex flex-grow truncate" };
const _hoisted_2$2 = {
  key: 0,
  class: "flex flex-grow items-center truncate"
};
const _hoisted_3$1 = { class: "flex p-8 items-center" };
const _hoisted_4$1 = ["innerHTML"];
const _hoisted_5$1 = {
  key: 1,
  class: "symbologyIcon p-6"
};
const _hoisted_6$1 = ["content", "innerHTML", "tabindex"];
const _hoisted_7$1 = {
  key: 1,
  class: "flex p-6 flex-grow"
};
const _hoisted_8$1 = {
  key: 2,
  class: "zoomButton text-center p-3"
};
const _hoisted_9$1 = ["content", "aria-label"];
const _hoisted_10$1 = {
  key: 0,
  class: "m-auto animate-spin spinner h-20 w-20"
};
const _hoisted_11$1 = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "green",
  class: "m-auto w-20 h-20"
};
const _hoisted_12$1 = {
  key: 2,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "red",
  class: "m-auto w-20 h-20"
};
const _hoisted_13$1 = ["innerHTML"];
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "result-item",
  props: {
    uid: { type: String, required: true },
    data: { type: Object, required: true },
    open: { type: Boolean, required: false },
    inList: { type: Boolean, required: false }
  },
  setup(__props) {
    const layerStore = useLayerStore();
    const props = __props;
    const iApi = inject("iApi");
    const watchers = ref([]);
    const detailsStore = useDetailsStore();
    const { t } = useI18n();
    const icon = ref("");
    const zoomStatus = ref("none");
    const zoomButton = ref();
    const getLayerInfo = () => {
      let layer = layerStore.getLayerByUid(props.uid);
      return layer;
    };
    const detailProperties = computed(() => detailsStore.properties);
    const defaultTemplates = computed(() => detailsStore.defaultTemplates);
    const supportsFeatures = computed(() => {
      return getLayerInfo()?.supportsFeatures ?? false;
    });
    const isMapLayer = computed(() => {
      return getLayerInfo()?.mapLayer ?? false;
    });
    const itemName = computed(() => {
      const nameField = getLayerInfo()?.nameField;
      let returnValue = nameField && props.data.loaded ? props.data.data[nameField] : iApi.$i18n.t("details.items.title");
      if (iApi.ui.isPlainText(returnValue)) {
        returnValue = iApi.ui.escapeHtml(returnValue);
      }
      return returnValue;
    });
    const makeHtmlLink = (html) => {
      if (typeof html === "string") {
        const classes = "underline text-blue-700 break-all";
        const div = document.createElement("div");
        div.innerHTML = html.trim();
        if (div.firstElementChild?.tagName == "A") {
          div.firstElementChild.className = classes;
          return div.innerHTML;
        } else {
          const options = {
            className: classes,
            target: "_blank",
            validate: {
              url: (value) => /^https?:\/\//.test(value)
              // only links that begin with a protocol will be hyperlinked
            }
          };
          return linkifyHtml(html, options);
        }
      }
      return html;
    };
    const itemChanged = () => {
      updateZoomStatus("none");
      if (props.data.loaded) {
        fetchIcon();
      } else {
        props.data.load().then(() => {
          fetchIcon();
        });
      }
    };
    const fetchIcon = () => {
      icon.value = "";
      if (!(props.data && props.data.loaded)) {
        return;
      }
      const layer = getLayerInfo();
      if (layer === void 0) {
        console.warn(`could not find layer for uid ${props.uid} during icon lookup`);
        return;
      }
      if (layer.supportsFeatures) {
        const oidField = layer.oidField;
        layer.getIcon(props.data.data[oidField]).then((value) => {
          icon.value = value;
        });
      }
    };
    const detailsTemplate = computed(() => {
      const layer = getLayerInfo();
      if (layer && detailProperties.value[layer.id] && detailProperties.value[layer.id].template) {
        return detailProperties.value[layer.id].template;
      }
      if (defaultTemplates.value && defaultTemplates.value[props.data.format]) {
        return defaultTemplates.value[props.data.format];
      }
      if (!supportsFeatures.value) {
        return _sfc_main$3;
      } else {
        return _sfc_main$4;
      }
    });
    const fieldsList = computed(() => {
      if (!supportsFeatures.value) {
        return [];
      }
      const layer = getLayerInfo();
      const fields = layer?.fields;
      return fields || [];
    });
    const fixtureFields = computed(() => {
      const layer = getLayerInfo();
      if (layer && detailProperties.value[layer.id] && detailProperties.value[layer.id].fields) {
        return detailProperties.value[layer.id].fields;
      }
      return void 0;
    });
    const updateZoomStatus = (value) => {
      if (value === "zoomed" || value === "error") {
        setTimeout(() => {
          zoomStatus.value = value;
          zoomButton.value?._tippy.show();
          setTimeout(() => {
            zoomButton.value?._tippy.hide();
            zoomStatus.value = "none";
          }, 3e3);
        }, 300);
      } else {
        zoomStatus.value = value;
      }
    };
    const zoomToFeature = () => {
      if (zoomStatus.value !== "none") {
        return;
      }
      updateZoomStatus("zooming");
      const layer = getLayerInfo();
      if (layer === void 0 || !layer.isLoaded) {
        console.warn(`Could not find layer for uid ${props.uid} during zoom geometry lookup`);
        updateZoomStatus("error");
        return;
      }
      if (!props.data.loaded) {
        console.warn("Details zoomToFeature call on item that is still loading. Should be impossible, alert the devs.");
        updateZoomStatus("error");
        return;
      }
      const oid = props.data.data[layer.oidField];
      const zoomUsingGraphic = () => {
        const opts = { getGeom: true };
        layer.getGraphic(oid, opts).then((g) => {
          if (g.geometry.invalid()) {
            console.error(`Could not find graphic for objectid ${oid}`);
            updateZoomStatus("error");
          } else {
            iApi.geo.map.zoomMapTo(g.geometry);
            updateZoomStatus("zoomed");
            iApi.updateAlert(iApi.$i18n.t("details.item.alert.zoom"));
          }
        }).catch(() => {
          updateZoomStatus("error");
        });
      };
      if (layer.layerType === LayerType.FEATURE && layer.geomType !== GeometryType.POINT) {
        layer.getGraphicExtent(oid).then((e) => {
          iApi.geo.map.zoomMapTo(e);
          updateZoomStatus("zoomed");
          iApi.updateAlert(iApi.$i18n.t("details.item.alert.zoom"));
        }).catch(() => {
          zoomUsingGraphic();
        });
      } else {
        zoomUsingGraphic();
      }
    };
    onBeforeMount(() => {
      watchers.value.push(
        watch(
          props,
          () => {
            itemChanged();
          },
          {
            deep: false,
            immediate: true
          }
        )
      );
    });
    onBeforeUnmount(() => {
      watchers.value.forEach((unwatch) => unwatch());
    });
    return (_ctx, _cache) => {
      const _directive_truncate = resolveDirective("truncate");
      const _directive_tippy = resolveDirective("tippy");
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1$2, [
          supportsFeatures.value ? (openBlock(), createElementBlock("div", _hoisted_2$2, [
            createBaseVNode("div", _hoisted_3$1, [
              __props.data.loaded && icon.value ? (openBlock(), createElementBlock("span", {
                key: 0,
                class: "flex-none symbologyIcon",
                innerHTML: icon.value
              }, null, 8, _hoisted_4$1)) : (openBlock(), createElementBlock("div", _hoisted_5$1, _cache[1] || (_cache[1] = [
                createBaseVNode("div", { class: "animate-spin spinner h-20 w-20" }, null, -1)
              ])))
            ]),
            __props.data.loaded ? withDirectives((openBlock(), createElementBlock("span", {
              key: 0,
              class: "pl-3 text-left flex-grow itemName",
              content: itemName.value,
              innerHTML: makeHtmlLink(itemName.value),
              tabindex: __props.inList ? -1 : 0
            }, null, 8, _hoisted_6$1)), [
              [_directive_truncate, {
                options: { placement: "right" }
              }]
            ]) : (openBlock(), createElementBlock("div", _hoisted_7$1, toDisplayString(unref(t)("details.loading")), 1)),
            __props.data.loaded ? (openBlock(), createElementBlock("span", _hoisted_8$1, [
              isMapLayer.value ? withDirectives((openBlock(), createElementBlock("button", {
                key: 0,
                type: "button",
                content: unref(t)(`details.item.zoom${zoomStatus.value === "none" ? "" : `.${zoomStatus.value}`}`),
                "aria-label": unref(t)(`grid.cells.zoom${zoomStatus.value === "none" ? "" : `.${zoomStatus.value}`}`),
                ref_key: "zoomButton",
                ref: zoomButton,
                onClick: _cache[0] || (_cache[0] = (e) => {
                  e.stopPropagation();
                  zoomToFeature();
                }),
                class: "text-gray-600 w-24 h-24 p-2 flex justify-center items-center"
              }, [
                zoomStatus.value === "zooming" ? (openBlock(), createElementBlock("div", _hoisted_10$1)) : zoomStatus.value === "zoomed" ? (openBlock(), createElementBlock("svg", _hoisted_11$1, _cache[2] || (_cache[2] = [
                  createBaseVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M4.5 12.75l6 6 9-13.5"
                  }, null, -1)
                ]))) : zoomStatus.value === "error" ? (openBlock(), createElementBlock("svg", _hoisted_12$1, _cache[3] || (_cache[3] = [
                  createBaseVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M6 18L18 6M6 6l12 12"
                  }, null, -1)
                ]))) : (openBlock(), createElementBlock("span", {
                  key: 3,
                  innerHTML: unref(iApi).ui.getZoomIcon()
                }, null, 8, _hoisted_13$1))
              ], 8, _hoisted_9$1)), [
                [_directive_tippy, { placement: "bottom" }]
              ]) : createCommentVNode("", true)
            ])) : createCommentVNode("", true)
          ])) : createCommentVNode("", true)
        ]),
        !!__props.open ? (openBlock(), createBlock(resolveDynamicComponent(detailsTemplate.value), {
          key: 0,
          identifyData: __props.data,
          fields: fieldsList.value,
          fixtureFields: fixtureFields.value,
          class: "p-8"
        }, null, 8, ["identifyData", "fields", "fixtureFields"])) : createCommentVNode("", true)
      ], 64);
    };
  }
});

const _hoisted_1$1 = {
  key: 0,
  class: "layerName w-full flex-grow p-5 pb-8 font-bold truncate",
  tabIndex: "0"
};
const _hoisted_2$1 = {
  key: 1,
  class: "p-8 mb-8 bg-gray-100 flex justify-between"
};
const _hoisted_3 = { for: "toggle" };
const _hoisted_4 = {
  key: 2,
  class: "flex flex-col justify-between p-8 mb-8 bg-gray-100"
};
const _hoisted_5 = { class: "flex" };
const _hoisted_6 = ["aria-label"];
const _hoisted_7 = ["content", "aria-label", "disabled"];
const _hoisted_8 = { class: "px-3 text-center flex-grow" };
const _hoisted_9 = ["content", "aria-label", "disabled"];
const _hoisted_10 = { key: 3 };
const _hoisted_11 = { key: 0 };
const _hoisted_12 = ["content"];
const _hoisted_13 = ["onClick"];
const _hoisted_14 = {
  key: 1,
  class: "text-center"
};
const _hoisted_15 = {
  key: 4,
  class: "p-5"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "result-list",
  props: {
    uid: { type: String, required: true },
    results: { type: Object, required: true }
  },
  setup(__props) {
    const el = ref();
    const blurEvent = () => {
      el.value._tippy.hide();
    };
    const keyupEvent = (e) => {
      const evt = e;
      if (evt.key === "Tab" && el.value?.matches(":focus")) {
        el.value._tippy.show();
      }
    };
    const iApi = inject("iApi");
    const detailsStore = useDetailsStore();
    const layerStore = useLayerStore();
    const props = __props;
    const { t } = useI18n();
    const layerExists = ref(false);
    const detailsFixture = ref(iApi.fixture.get("details"));
    const hilightToggle = ref(true);
    const showList = ref(false);
    const currentIdx = ref(0);
    const itemsPerPage = ref(20);
    const handlers = ref([]);
    const watchers = ref([]);
    const activeGreedy = computed(() => detailsStore.activeGreedy);
    const detailProperties = computed(() => detailsStore.properties);
    const endIdx = computed(() => currentIdx.value + itemsPerPage.value);
    const getBoundLayer = () => {
      return layerStore.getLayerByUid(props.uid);
    };
    const getBoundLayerResult = () => {
      return props.results.find((layerIR) => {
        return layerIR.uid === props.uid;
      });
    };
    const isLayerResultLoaded = computed(() => {
      const results = getBoundLayerResult();
      return results?.loaded ?? false;
    });
    const itemRequestTime = computed(() => {
      const results = getBoundLayerResult();
      return results?.requestTime;
    });
    const showPaginator = computed(
      () => layerExists.value && (!showList.value && getLayerIdentifyItems().length > 1 || showList.value && getLayerIdentifyItems().length > itemsPerPage.value)
    );
    const layerName = computed(() => {
      const layer = getBoundLayer();
      if (layer && detailProperties.value[layer.id] && detailProperties.value[layer.id].name) {
        return detailProperties.value[layer.id].name;
      }
      return layer?.name ?? "";
    });
    const uidCompute = computed(() => {
      return props.uid;
    });
    const getLayerIdentifyItems = () => {
      const results = getBoundLayerResult();
      return results ? results.items : [];
    };
    const currentIdentifyItem = computed(() => {
      return getLayerIdentifyItems()[currentIdx.value];
    });
    const canHighlight = computed(() => {
      if (detailsFixture.value.hasHilighter()) {
        const layer = getBoundLayer();
        if (layer) {
          return layer.mapLayer && layer.supportsFeatures;
        }
      }
      return false;
    });
    const onHilightToggle = (value) => {
      hilightToggle.value = value;
      detailsStore.hilightToggle = value;
      updateHighlight();
    };
    const initDetails = () => {
      const layer = getBoundLayer();
      currentIdx.value = currentIdx.value ?? 0;
      hilightToggle.value = detailsStore.hilightToggle ?? hilightToggle.value;
      showList.value = false;
      layerExists.value = !!layer;
      updateHighlight();
    };
    const advanceItemIndex = (direction) => {
      if (showList.value) {
        currentIdx.value += direction * itemsPerPage.value;
        updateHighlight();
      } else {
        currentIdx.value += direction;
      }
    };
    const updateHighlight = () => {
      const resultItems = getLayerIdentifyItems();
      if (hilightToggle.value && isLayerResultLoaded.value && resultItems.length > 0 && canHighlight.value) {
        if (showList.value) {
          detailsFixture.value.hilightDetailsItems(resultItems.slice(currentIdx.value, endIdx.value), props.uid);
        } else {
          const currItem = resultItems[currentIdx.value];
          if (currItem) {
            detailsFixture.value.hilightDetailsItems([currItem], props.uid);
          }
        }
      } else {
        detailsFixture.value.removeDetailsHilight();
      }
    };
    const clickShowList = () => {
      showList.value = true;
      currentIdx.value = Math.floor(currentIdx.value / itemsPerPage.value) * itemsPerPage.value;
      updateHighlight();
    };
    const detailsClosed = () => {
      detailsFixture.value.removeDetailsHilight();
    };
    const detailsMinimized = () => {
      detailsFixture.value.removeDetailsHilight();
    };
    const clickListItem = (idx) => {
      const secretIdx = currentIdx.value;
      currentIdx.value = idx;
      showList.value = false;
      if (secretIdx === idx) {
        updateHighlight();
      }
    };
    onMounted(() => {
      handlers.value.push(
        iApi.event.on(GlobalEvents.LAYER_REMOVE, (removedLayer) => {
          const detailsPanel = iApi.panel.get("details");
          if (props.uid === removedLayer.uid && !!detailsPanel) {
            detailsPanel.close();
          }
        })
      );
      handlers.value.push(
        iApi.event.on(GlobalEvents.PANEL_CLOSED, (panel) => {
          if (panel.id === "details") {
            detailsClosed();
          }
        })
      );
      handlers.value.push(
        iApi.event.on(GlobalEvents.PANEL_MINIMIZED, (panel) => {
          if (panel.id === "details") {
            detailsMinimized();
          }
        })
      );
      handlers.value.push(
        iApi.event.on(GlobalEvents.MAP_BASEMAPCHANGE, (payload) => {
          if (hilightToggle.value && payload.schemaChanged) {
            updateHighlight();
          }
        })
      );
      el.value?.addEventListener("blur", blurEvent);
      el.value?.addEventListener("keyup", keyupEvent);
    });
    onBeforeMount(() => {
      watchers.value.push(
        watch(
          currentIdentifyItem,
          () => {
            if (!showList.value) {
              initDetails();
              if (currentIdentifyItem.value === void 0) {
                detailsFixture.value.removeDetailsHilight();
              }
            }
          },
          {
            deep: false,
            immediate: true
          }
        )
      );
      watchers.value.push(
        watch(
          uidCompute,
          () => {
            const localUid = props.uid;
            if (showList.value && localUid) {
              const layerIR = getBoundLayerResult();
              if (layerIR) {
                layerIR.loading.then(() => {
                  if (props.uid === localUid && showList.value) {
                    updateHighlight();
                  }
                });
              }
            }
          },
          {
            deep: false,
            immediate: true
          }
        )
      );
      watchers.value.push(
        watch(itemRequestTime, () => {
          currentIdx.value = 0;
        })
      );
      watchers.value.push(
        watch(
          () => props.uid,
          () => {
            currentIdx.value = 0;
          }
        )
      );
    });
    onBeforeUnmount(() => {
      watchers.value.forEach((unwatch) => unwatch());
      handlers.value.forEach((handler) => iApi.event.off(handler));
      el.value?.removeEventListener("blur", blurEvent);
      el.value?.removeEventListener("keyup", keyupEvent);
    });
    return (_ctx, _cache) => {
      const _directive_truncate = resolveDirective("truncate");
      const _directive_tippy = resolveDirective("tippy");
      const _directive_focus_item = resolveDirective("focus-item");
      const _directive_focus_list = resolveDirective("focus-list");
      return isLayerResultLoaded.value && activeGreedy.value === 0 ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: "detailsContent relative flex flex-col flex-grow pl-5",
        style: normalizeStyle(__props.results.length > 1 ? { "margin-left": "42px" } : "")
      }, [
        layerExists.value ? withDirectives((openBlock(), createElementBlock("h1", _hoisted_1$1, [
          createTextVNode(toDisplayString(layerName.value), 1)
        ])), [
          [_directive_truncate, { options: { placement: "top-start" } }]
        ]) : createCommentVNode("", true),
        canHighlight.value ? (openBlock(), createElementBlock("div", _hoisted_2$1, [
          createBaseVNode("label", _hoisted_3, toDisplayString(unref(t)("details.togglehilight.title")), 1),
          createVNode(Toggle, {
            config: {
              value: hilightToggle.value,
              disabled: false
            },
            onToggled: onHilightToggle
          }, null, 8, ["config"])
        ])) : createCommentVNode("", true),
        showPaginator.value ? (openBlock(), createElementBlock("div", _hoisted_4, [
          createBaseVNode("div", _hoisted_5, [
            !showList.value ? (openBlock(), createElementBlock("button", {
              key: 0,
              type: "button",
              class: "px-8 font-bold hover:bg-gray-200 focus:bg-gray-200",
              "aria-label": unref(t)("details.item.see.list"),
              onClick: _cache[0] || (_cache[0] = ($event) => clickShowList())
            }, toDisplayString(unref(t)("details.item.see.list")), 9, _hoisted_6)) : createCommentVNode("", true),
            createBaseVNode("div", {
              class: normalizeClass(["flex ml-auto bg-gray-200 py-8 items-center", { "w-full": showList.value }])
            }, [
              withDirectives((openBlock(), createElementBlock("button", {
                type: "button",
                content: unref(t)(showList.value ? "details.items.previous" : "details.item.previous.item"),
                onClick: _cache[1] || (_cache[1] = ($event) => advanceItemIndex(-1)),
                class: "mx-2 opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default",
                "aria-label": unref(t)(showList.value ? "details.items.previous" : "details.item.previous.item"),
                disabled: currentIdx.value === 0
              }, _cache[3] || (_cache[3] = [
                createBaseVNode("svg", {
                  height: "24",
                  width: "24",
                  viewBox: "0 0 23 23"
                }, [
                  createBaseVNode("g", null, [
                    createBaseVNode("path", { d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" })
                  ])
                ], -1)
              ]), 8, _hoisted_7)), [
                [_directive_tippy, { placement: "top" }]
              ]),
              createBaseVNode("span", _hoisted_8, toDisplayString(showList.value ? unref(t)("details.items.range", [
                currentIdx.value + 1,
                Math.min(endIdx.value, getLayerIdentifyItems().length),
                getLayerIdentifyItems().length
              ]) : unref(t)("details.item.count", [currentIdx.value + 1, getLayerIdentifyItems().length])), 1),
              withDirectives((openBlock(), createElementBlock("button", {
                type: "button",
                content: unref(t)(showList.value ? "details.items.next" : "details.item.next.item"),
                onClick: _cache[2] || (_cache[2] = ($event) => advanceItemIndex(1)),
                class: "mx-2 rotate-180 opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default",
                "aria-label": unref(t)(showList.value ? "details.items.next" : "details.item.next.item"),
                disabled: !showList.value && currentIdx.value === getLayerIdentifyItems().length - 1 || showList.value && endIdx.value >= getLayerIdentifyItems().length
              }, _cache[4] || (_cache[4] = [
                createBaseVNode("svg", {
                  height: "24",
                  width: "24",
                  viewBox: "0 0 23 23"
                }, [
                  createBaseVNode("g", null, [
                    createBaseVNode("path", { d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" })
                  ])
                ], -1)
              ]), 8, _hoisted_9)), [
                [_directive_tippy, { placement: "top" }]
              ])
            ], 2)
          ])
        ])) : createCommentVNode("", true),
        layerExists.value ? (openBlock(), createElementBlock("div", _hoisted_10, [
          getLayerIdentifyItems().length > 0 ? (openBlock(), createElementBlock("div", _hoisted_11, [
            showList.value ? withDirectives((openBlock(), createElementBlock("div", {
              key: 0,
              class: "flex flex-col",
              content: unref(t)("details.layers.results.list.tooltip"),
              ref_key: "el",
              ref: el
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(getLayerIdentifyItems().slice(currentIdx.value, endIdx.value), (item, idx) => {
                return withDirectives((openBlock(), createElementBlock("button", {
                  class: "flex flex-grow truncate default-focus-style hover:bg-gray-200",
                  key: idx,
                  onClick: ($event) => clickListItem(currentIdx.value + idx)
                }, [
                  createVNode(_sfc_main$2, {
                    data: item,
                    uid: __props.uid,
                    open: false,
                    "in-list": true
                  }, null, 8, ["data", "uid"])
                ], 8, _hoisted_13)), [
                  [_directive_focus_item, "show-truncate"]
                ]);
              }), 128))
            ], 8, _hoisted_12)), [
              [_directive_focus_list],
              [_directive_tippy, {
                trigger: "manual",
                placement: "top-start"
              }]
            ]) : (openBlock(), createBlock(_sfc_main$2, {
              key: 1,
              data: currentIdentifyItem.value,
              uid: __props.uid,
              open: true,
              "in-list": false
            }, null, 8, ["data", "uid"]))
          ])) : (openBlock(), createElementBlock("div", _hoisted_14, toDisplayString(unref(t)("details.layers.results.empty.currentLayer")), 1))
        ])) : (openBlock(), createElementBlock("div", _hoisted_15, toDisplayString(unref(t)("details.item.no.data")), 1))
      ], 4)) : (openBlock(), createElementBlock("div", {
        key: 1,
        class: normalizeClass(["flex justify-center py-10 items-center", __props.results.length > 1 ? "ml-42" : ""])
      }, [
        _cache[5] || (_cache[5] = createBaseVNode("span", { class: "animate-spin spinner h-20 w-20 px-5 mr-8" }, null, -1)),
        createTextVNode(" " + toDisplayString(unref(t)("details.item.loading")), 1)
      ], 2));
    };
  }
});

const ResultList = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-bc907db1"]]);

const _hoisted_1 = { class: "relative h-full" };
const _hoisted_2 = { class: "detailsContentSection overflow-y-auto h-full" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "details-screen",
  props: {
    panel: {
      type: Object
    }
  },
  setup(__props) {
    const { t } = useI18n();
    const iApi = inject("iApi");
    const detailsStore = useDetailsStore();
    const handlers = ref([]);
    const watchers = ref([]);
    const layerResults = ref([]);
    const noResults = ref(false);
    const selectedLayer = ref("");
    const activeGreedy = computed(() => detailsStore.activeGreedy);
    const payload = computed(() => detailsStore.payload);
    const detailProperties = computed(() => detailsStore.properties);
    const changeLayerSelection = (uid) => {
      selectedLayer.value = uid;
    };
    const findLayerResult = (uid) => layerResults.value.find((item) => item.uid === uid);
    const loadPayloadItems = (newPayload) => {
      if (newPayload === void 0) {
        return;
      }
      detailsStore.activeGreedy = newPayload.length === 0 ? 0 : newPayload[0].requestTime;
      layerResults.value = newPayload;
      autoOpen(newPayload);
    };
    const autoOpen = (newPayload) => {
      if (selectedLayer.value) {
        const selectedResult = findLayerResult(selectedLayer.value);
        if (selectedResult) {
          selectedResult.loading.then(() => {
            if (selectedResult.requestTime !== activeGreedy.value) {
              return;
            }
            if (selectedResult.items.length > 0) {
              detailsStore.activeGreedy = 0;
              noResults.value = false;
            } else {
              autoOpenAny(newPayload);
            }
          });
        } else {
          autoOpenAny(newPayload);
        }
      } else {
        autoOpenAny(newPayload);
      }
    };
    const autoOpenAny = (newPayload, priorityStack) => {
      let priStack;
      if (priorityStack) {
        priStack = priorityStack;
      } else {
        const layerDetailsConfigs = detailsStore.properties;
        const layerPriorities = newPayload.map((idRes) => [
          layerDetailsConfigs[idRes.layerId]?.priority ?? 50,
          idRes.layerId
        ]);
        const setMagic = new Set(layerPriorities.map((lp) => lp[0]));
        priStack = [];
        setMagic.forEach((uniquePriority) => {
          const matchingLayerIds = layerPriorities.filter((lp) => lp[0] === uniquePriority).map((lp) => lp[1]);
          priStack.push([uniquePriority, matchingLayerIds]);
        });
        priStack.sort((a, b) => b[0] - a[0]);
      }
      if (priStack.length === 0) {
        detailsStore.activeGreedy = 0;
        noResults.value = true;
        return;
      }
      const currentPriorites = priStack[priStack.length - 1][1];
      const loadingResults = newPayload.filter((payloadIR) => currentPriorites.includes(payloadIR.layerId)).map(
        (payloadIR) => payloadIR.loading.then(() => payloadIR.items.length > 0 ? Promise.resolve(payloadIR) : Promise.reject())
      );
      const lastTime = newPayload.length === 0 ? 0 : newPayload[0].requestTime;
      Promise.any(loadingResults).then((winningResult) => {
        if (winningResult.requestTime !== activeGreedy.value) {
          return;
        }
        detailsStore.activeGreedy = 0;
        selectedLayer.value = winningResult.uid;
        noResults.value = false;
      }).catch(() => {
        if (lastTime === activeGreedy.value) {
          priStack.pop();
          autoOpenAny(newPayload, priStack);
        }
      });
    };
    onBeforeMount(() => {
      watchers.value.push(
        watch(
          payload,
          (newPayload) => {
            loadPayloadItems(newPayload);
          },
          {
            deep: false,
            // was true when our array had undefineds. now that objects arrive intact, we dont want this triggering when innards update
            immediate: true
          }
        )
      );
    });
    onBeforeUnmount(() => {
      handlers.value.forEach((handler) => iApi.event.off(handler));
      watchers.value.forEach((unwatch) => unwatch());
    });
    return (_ctx, _cache) => {
      const _component_panel_screen = resolveComponent("panel-screen");
      return openBlock(), createBlock(_component_panel_screen, { panel: __props.panel }, {
        header: withCtx(() => [
          createTextVNode(toDisplayString(
            // Show different titles based on what requested the panel
            unref(detailsStore).origin === "toggleEvent" ? unref(t)("details.layers.title.gridOrigin") : unref(t)("details.layers.title.identifyOrigin")
          ), 1)
        ]),
        content: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            layerResults.value.length > 1 ? (openBlock(), createBlock(_sfc_main$5, {
              key: 0,
              results: layerResults.value,
              detailsProperties: detailProperties.value,
              selected: selectedLayer.value,
              onSelectionChanged: changeLayerSelection
            }, null, 8, ["results", "detailsProperties", "selected"])) : createCommentVNode("", true),
            createBaseVNode("div", _hoisted_2, [
              !noResults.value ? (openBlock(), createBlock(ResultList, {
                key: 0,
                uid: selectedLayer.value,
                results: layerResults.value
              }, null, 8, ["uid", "results"])) : (openBlock(), createElementBlock("div", {
                key: 1,
                class: normalizeClass(["text-center", { "ml-42": layerResults.value.length > 1 }])
              }, toDisplayString(layerResults.value.length >= 1 ? unref(t)("details.layers.results.empty") : unref(t)("details.layers.results.empty.noLayers")), 3))
            ])
          ])
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
});

const detailsScreen = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0f484f35"]]);

export { detailsScreen as default };
