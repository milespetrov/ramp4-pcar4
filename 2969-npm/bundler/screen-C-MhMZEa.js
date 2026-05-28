import { Et as e, Tt as t, V as n, h as r, m as i } from "./main-C0Z1tc1z.js";
import { t as a } from "./_plugin-vue_export-helper-O4QQSku4.js";
import { Fragment as o, Transition as s, computed as c, createBlock as l, createCommentVNode as u, createElementBlock as d, createElementVNode as f, createTextVNode as ee, createVNode as p, defineComponent as m, inject as te, nextTick as ne, normalizeClass as h, onBeforeUnmount as g, onErrorCaptured as _, onMounted as re, openBlock as v, provide as y, reactive as b, ref as x, renderList as ie, renderSlot as S, resolveComponent as ae, resolveDirective as C, toDisplayString as w, unref as T, useId as E, useTemplateRef as D, vShow as O, watch as k, withCtx as A, withDirectives as j, withModifiers as oe } from "vue";
import { useI18n as se } from "vue-i18n";
import { ColorPicker as M } from "vue-accessible-color-picker";
import { Treeselect as ce } from "@ramp4-pcar4/vue3-treeselect";
import "@ramp4-pcar4/vue3-treeselect/dist/vue3-treeselect.css";
//#region src/fixtures/wizard/form-footer.vue?vue&type=script&setup=true&lang.ts
var N = { class: "flex justify-end mb-20" }, P = ["disabled", "animation"], F = { class: "button-text" }, I = /* @__PURE__ */ a(/* @__PURE__ */ m({
	__name: "form-footer",
	props: {
		animation: {
			type: Boolean,
			default: !1
		},
		disabled: {
			type: Boolean,
			default: !0
		}
	},
	setup(e) {
		let { t } = se();
		return (n, r) => (v(), d("div", N, [f("button", {
			class: "hover:bg-gray-200 text-gray-600 font-bold py-8 px-16 m-2",
			type: "button",
			onClick: r[0] ||= (e) => n.$emit("cancel")
		}, w(T(t)("wizard.step.cancel")), 1), f("button", {
			class: h(["button bg-blue-700 hover:bg-blue-700 text-white font-bold py-8 px-16 m-2 disabled:bg-gray-200 disabled:cursor-default disabled:text-gray-400", { "button--loading": e.animation && e.disabled }]),
			type: "button",
			disabled: e.disabled,
			animation: e.animation,
			onClick: r[1] ||= (e) => n.$emit("submit")
		}, [f("span", F, w(T(t)("wizard.step.continue")), 1)], 10, P)]));
	}
}), [["__scopeId", "data-v-4802f647"]]), le = { key: 0 }, ue = { class: "text-base font-bold" }, L = {
	class: "relative py-8 mb-0.5 h-75 hover:bg-gray-200 focus-within:bg-gray-200",
	"data-type": "file"
}, R = ["aria-label"], z = { class: "text-gray-500 text-xs mb-1" }, B = { key: 1 }, V = { class: "text-base font-bold" }, H = {
	class: "mb-0.5",
	"data-type": "url"
}, U = ["value", "aria-label"], de = {
	key: 0,
	class: "text-red-900 text-xs"
}, W = { key: 2 }, G = { class: "text-base font-bold" }, fe = {
	class: "relative mb-0.5",
	"data-type": "select"
}, pe = { key: 0 }, K = {
	key: 0,
	class: "text-red-900 text-xs"
}, q = { key: 1 }, J = [
	"size",
	"value",
	"aria-label"
], Y = ["value"], me = {
	key: 0,
	class: "text-red-900 text-xs"
}, he = {
	key: 1,
	class: "text-red-900 text-xs"
}, ge = { key: 3 }, X = ["aria-label"], Z = { class: "text-base font-bold" }, _e = { key: 4 }, ve = { class: "text-base font-bold" }, ye = { class: "relative mb-0.5" }, be = ["value", "aria-label"], xe = {
	key: 0,
	class: "text-red-900 text-xs"
}, Q = /* @__PURE__ */ a(/* @__PURE__ */ m({
	__name: "form-input",
	props: {
		activeStep: {
			type: Number,
			default: 0
		},
		defaultOption: {
			type: Boolean,
			default: !1
		},
		formatError: {
			type: Boolean,
			default: !1
		},
		failureError: {
			type: Boolean,
			default: !1
		},
		help: {
			type: [String, Boolean],
			default: !1
		},
		label: {
			type: [String, Boolean],
			default: !1
		},
		modelValue: {
			type: [String, Array],
			default: ""
		},
		name: {
			type: [String, Boolean],
			default: !1
		},
		options: {
			type: Array,
			default() {
				return [];
			}
		},
		selectedValues: {
			type: Array,
			default: () => []
		},
		size: {
			type: [Number, String],
			default: 0
		},
		sublayerOptions: {
			type: Function,
			default() {
				return [];
			}
		},
		multiple: {
			type: Boolean,
			default: !1
		},
		searchable: {
			type: Boolean,
			default: !1
		},
		step: {
			type: Number,
			default: 0
		},
		type: {
			type: String,
			default: "text"
		},
		url: {
			type: [String, Boolean],
			default: !1
		},
		validation: {
			type: Boolean,
			default: !1
		},
		validationMessages: { type: Object },
		ariaLabel: {
			type: String,
			default: ""
		}
	},
	emits: [
		"update:modelValue",
		"link",
		"select",
		"upload",
		"text",
		"nested",
		"focusElement"
	],
	setup(e, { expose: t, emit: n }) {
		let r = te("iApi"), { t: i } = se(), a = n, s = e, c = x(), l = D("textInput"), m = D("selectInput"), ne = D("urlInput");
		t({
			selectInput: m,
			textInput: l,
			urlInput: ne
		});
		let _ = x(!1), y = x(!1), S = x(!1), ae = x(!1), E = x([...s.selectedValues]), O = x("value-label"), oe = x("option-label"), M = x(void 0), N = x(null), P = b([]);
		if (s.defaultOption && s.modelValue === "" && s.options.length) {
			let e = s.options[0].value;
			if (s.name === "latField") {
				let t = /* @__PURE__ */ new RegExp(/^(y|lat.*)$/i);
				e = s.options.find((e) => t.test(e.label))?.value || e;
			} else if (s.name === "longField") {
				let t = /* @__PURE__ */ new RegExp(/^(x|long.*)$/i);
				e = s.options.find((e) => t.test(e.label))?.value || e;
			}
			a("update:modelValue", e);
		}
		let F = (e) => {
			e.trim() === "" ? (_.value = !1, r.updateAlert(i("wizard.configure.name.error.required"))) : _.value = !0;
		}, I = (e) => {
			let t;
			try {
				t = new URL(e);
			} catch {
				return _.value = !1, !1;
			}
			_.value = t.protocol === "http:" || t.protocol === "https:";
		}, Q = (e) => {
			a("upload", e.target.files[0]), e.target.value = "";
		}, Se = (e) => {
			I(e.target.value), a("link", e.target.value, _.value), y.value = !1;
		}, $ = (e, t) => {
			a(e ? "select" : "update:modelValue", t.target.value);
		}, Ce = (e) => {
			a("nested", e.target.checked);
		}, we = (e) => {
			F(e.target.value), a("link", e.target.value, _.value), S.value = !1;
		}, Te = () => {
			a("select", s.sublayerOptions(E.value)), ae.value = E.value && E.value.length === 0;
		}, Ee = (e) => e.length > 5 ? `${e.slice(0, 5)}...` : e;
		function De() {
			M.value = new ResizeObserver(function() {
				Oe();
			}), M.value.observe(r.$vApp.$el.querySelector(".vue-treeselect__control")), M.value.observe(r.$vApp.$el.querySelector(".vue-treeselect__menu"));
		}
		let Oe = () => {
			let e = r.$vApp.$el.querySelector(".vue-treeselect__menu")?.clientHeight ?? 0, t = r.$vApp.$el.querySelector(".vue-treeselect__control")?.clientHeight ?? 0;
			c.value.style.height = `${e + t + 30}px`;
		};
		P.push(k(N, (e) => {
			e && ke();
		}));
		let ke = () => {
			if (N.value) {
				let e = N.value.querySelector("input[type=\"text\"]");
				e && e.setAttribute("aria-label", i("wizard.configure.sublayers.select"));
			}
		};
		return re(() => {
			s.step === 2 && s.step === s.activeStep && a("focusElement");
		}), g(() => {
			M.value.disconnect(), P.forEach((e) => e());
		}), (t, n) => {
			let r = C("truncate");
			return v(), d("div", {
				class: "input-wrapper mb-12",
				ref_key: "el",
				ref: c
			}, [e.type === "file" ? (v(), d("div", le, [
				f("label", ue, w(e.label), 1),
				f("div", L, [f("input", {
					class: "absolute w-full opacity-0 inset-0 cursor-pointer",
					type: "file",
					name: "file",
					accept: ".geojson,.json,.csv,.zip",
					"aria-label": s.ariaLabel,
					onInput: n[0] ||= (e) => {
						Q(e);
					}
				}, null, 40, R), n[11] ||= f("div", { class: "upload-mask absolute inset-0 flex border-dashed border-2 border-gray-400 pointer-events-none justify-center" }, [f("svg", {
					class: "w-30 h-30 m-auto",
					fill: "#a8a8a8",
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 58 58"
				}, [f("path", { d: "M29,58A29,29,0,1,0,0,29,29,29,0,0,0,29,58ZM29,4A25,25,0,1,1,4,29,25,25,0,0,1,29,4Z" }), f("polygon", { points: "27 22 27 44.4 31 44.4 31 22 41.7 31.1 44.3 28.1 29 15 13.7 28.1 16.3 31.1 27 22" })])], -1)]),
				f("div", z, w(e.help), 1)
			])) : e.type === "url" ? (v(), d("div", B, [
				f("label", V, w(e.label), 1),
				f("div", H, [f("input", {
					class: "text-sm w-full border-solid border-gray-300 mb-5 focus:border-green-500",
					type: "url",
					name: "url",
					value: e.modelValue,
					"aria-label": s.ariaLabel,
					onChange: n[1] ||= (e) => _.value ? y.value = !1 : y.value = !0,
					onInput: n[2] ||= (e) => {
						Se(e);
					},
					ref_key: "urlInput",
					ref: ne
				}, null, 40, U)]),
				y.value ? (v(), d("div", de, w(e.modelValue ? e.validationMessages?.invalid : e.validationMessages?.required), 1)) : u("", !0)
			])) : e.type === "select" ? (v(), d("div", W, [f("label", G, w(e.label), 1), f("div", fe, [e.multiple ? (v(), d("div", pe, [f("div", {
				ref_key: "treeWrapper",
				ref: N
			}, [p(T(ce), {
				modelValue: E.value,
				"onUpdate:modelValue": n[3] ||= (e) => E.value = e,
				multiple: !0,
				options: e.options,
				"default-expand-level": 1,
				"always-open": !0,
				"open-direction": "bottom",
				"max-height": 300,
				limit: 4,
				disableFuzzyMatching: !0,
				searchable: e.searchable,
				childrenIgnoreDisabled: !0,
				"value-consists-of": "LEAF_PRIORITY",
				placeholder: T(i)("wizard.configure.sublayers.select"),
				noResultsText: T(i)("wizard.configure.sublayers.results"),
				clearAllText: T(i)("wizard.configure.sublayers.clearAll"),
				onSelect: n[4] ||= (e) => {
					t.$nextTick(() => {
						Te();
					});
				},
				onDeselect: n[5] ||= (e) => {
					t.$nextTick(() => {
						Te();
					});
				},
				onOpen: n[6] ||= (e) => {
					t.$nextTick(() => {
						De();
					});
				}
			}, {
				[O.value]: A(({ node: e }) => [f("label", null, w(Ee(e.label)), 1)]),
				[oe.value]: A(({ node: e, labelClassName: t }) => [j((v(), d("label", { class: h(t) }, [ee(w(e.label), 1)], 2)), [[r, { options: {
					placement: "top",
					hideOnClick: !1,
					theme: "ramp4",
					animation: "scale"
				} }]])]),
				_: 2
			}, 1032, [
				"modelValue",
				"options",
				"searchable",
				"placeholder",
				"noResultsText",
				"clearAllText"
			])], 512), e.validation && ae.value ? (v(), d("div", K, w(e.validationMessages?.required), 1)) : u("", !0)])) : (v(), d("div", q, [
				f("select", {
					class: h(["block border-solid border-gray-300 w-full p-3 overflow-y-auto", e.size ? "configure-select" : ""]),
					size: e.size,
					value: e.modelValue,
					onInput: n[7] ||= (t) => $(e.size, t),
					"aria-label": s.ariaLabel,
					ref_key: "selectInput",
					ref: m
				}, [(v(!0), d(o, null, ie(e.options, (e) => (v(), d("option", {
					class: "p-6",
					key: e.label,
					value: e.value
				}, w(e.label), 9, Y))), 128))], 42, J),
				e.validation && e.formatError ? (v(), d("div", me, w(e.validationMessages?.invalid), 1)) : u("", !0),
				e.validation && e.failureError ? (v(), d("div", he, w(e.validationMessages?.failure), 1)) : u("", !0)
			]))])])) : e.type === "checkbox" ? (v(), d("div", ge, [f("input", {
				class: "text-sm border-solid border-gray-300 mb-5 focus:border-green-500 mr-10",
				type: "checkbox",
				name: "nested",
				checked: !0,
				"aria-label": s.ariaLabel,
				onChange: n[8] ||= (e) => {
					Ce(e);
				}
			}, null, 40, X), f("label", Z, w(e.label), 1)])) : (v(), d("div", _e, [
				f("label", ve, w(e.label), 1),
				f("div", ye, [f("input", {
					class: h(["border-solid border-gray-300 p-3 w-full", { "error-border": !_.value && !e.modelValue }]),
					type: "text",
					value: e.modelValue,
					"aria-label": s.ariaLabel,
					onChange: n[9] ||= (e) => _.value ? S.value = !1 : S.value = !0,
					onInput: n[10] ||= (e) => {
						we(e);
					},
					ref_key: "textInput",
					ref: l
				}, null, 42, be)]),
				e.validation && !e.modelValue ? (v(), d("div", xe, w(e.validationMessages?.required), 1)) : u("", !0)
			]))], 512);
		};
	}
}), [["__scopeId", "data-v-767bf0d7"]]), Se = { class: "step relative flex flex-col px-12" }, $ = { class: "stepper-header flex pb-24" }, Ce = {
	key: 1,
	class: "flex-none stepper-check w-24 h-24 text-gray-400"
}, we = { class: "flex flex-col overflow-hidden" }, Te = { class: "pl-12 flex items-center text-md" }, Ee = { class: "pl-12 text-xs transition-opacity duration-1000 ease-out" }, De = /* @__PURE__ */ a(/* @__PURE__ */ m({
	__name: "stepper-item",
	props: {
		title: {
			type: String,
			required: !0
		},
		summary: { type: String }
	},
	emits: ["focusPanel", "focusFirstElement"],
	setup(e, { emit: t }) {
		let n = te("stepper"), r = x(), i = t, a = x(-1), o = (e) => {
			l() || (e.stopPropagation(), i("focusPanel"), i("focusFirstElement"));
		};
		re(() => {
			a.value = n.numSteps++, r.value?.addEventListener("focusout", o);
		}), g(() => {
			r.value?.removeEventListener("focusout", o);
		});
		let c = () => n.activeIndex > a.value, l = () => n.activeIndex === a.value;
		return (t, n) => {
			let i = C("truncate");
			return v(), d("div", Se, [f("div", $, [c() ? (v(), d("div", Ce, [...n[0] ||= [f("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				height: "100%",
				width: "100%",
				preserveAspectRatio: "xMidYMid meet",
				viewBox: "0 0 24 24",
				focusable: "false"
			}, [f("g", { id: "check_circle" }, [f("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" })])], -1)]])) : (v(), d("div", {
				key: 0,
				class: h(["w-24 h-24 bg-gray-500 rounded-full flex justify-center items-center text-white text-xs font-semibold", { "bg-blue-500": l }])
			}, w(a.value + 1), 3)), f("div", we, [f("div", Te, w(e.title), 1), j((v(), d("div", Ee, [ee(w(e.summary), 1)])), [[O, !l()], [i]])])]), p(s, {
				name: "step",
				mode: "out-in"
			}, {
				default: A(() => [j(f("div", {
					class: "pl-36",
					ref_key: "stepItem",
					ref: r
				}, [S(t.$slots, "default", {}, void 0, !0)], 512), [[O, l()]])]),
				_: 3
			})]);
		};
	}
}), [["__scopeId", "data-v-53b5c8d8"]]), Oe = { class: "py-12 h-auto stepper" }, ke = /* @__PURE__ */ m({
	__name: "stepper",
	props: { activeStep: {
		type: Number,
		default: 0
	} },
	setup(e) {
		let t = e, n = c(() => t.activeStep), r = b([]), i = b({
			activeIndex: t.activeStep,
			numSteps: 0
		});
		return y("stepper", i), r.push(k(n, () => {
			i.activeIndex = t.activeStep;
		})), g(() => {
			r.forEach((e) => e());
		}), (e, t) => (v(), d("div", Oe, [S(e.$slots, "default")]));
	}
}), Ae = { class: "block text-center mb-10" }, je = {
	key: 0,
	class: "inline-flex items-center mb-10"
}, Me = { class: "px-5 text-xs" }, Ne = {
	key: 0,
	class: "text-red-900 text-xs"
}, Pe = { key: 6 }, Fe = ["for"], Ie = {
	key: 7,
	class: "text-base font-bold"
}, Le = { class: "sr-only" }, Re = { class: "sr-only" }, ze = /* @__PURE__ */ a(/* @__PURE__ */ m({
	__name: "screen",
	props: { panel: {
		type: Object,
		required: !0
	} },
	setup(a) {
		let o = i(), { t: s } = se(), m = te("iApi"), y = x(), ie = E(), S = x([]), C = c(() => o.layerSource), O = c(() => o.currStep), k = x(null), j = x(), ce = x(0), N = x(!1), P = x(), F = D("stepOneStart"), le = D("stepTwoStart"), ue = D("stepThreeStart"), L = x(!1), R = x(!1), z = x(!1), B = x(!1), V = x(!1), H = x(!1), U = x(!0), de = x(""), W = x(""), G = x([]), fe = b([
			{
				value: e.FEATURE,
				label: s("wizard.layerType.esriFeature")
			},
			{
				value: e.MAPIMAGE,
				label: s("wizard.layerType.esriMapImage")
			},
			{
				value: e.TILE,
				label: s("wizard.layerType.esriTile")
			},
			{
				value: e.IMAGERY,
				label: s("wizard.layerType.esriImagery")
			},
			{
				value: e.WMS,
				label: s("wizard.layerType.ogcWms")
			},
			{
				value: e.WFS,
				label: s("wizard.layerType.ogcWfs")
			}
		]), pe = b([
			{
				value: e.GEOJSON,
				label: s("wizard.fileType.geojson")
			},
			{
				value: e.SHAPEFILE,
				label: s("wizard.fileType.shapefile")
			},
			{
				value: e.CSV,
				label: s("wizard.fileType.csv")
			}
		]), K = c({
			get() {
				return o.url;
			},
			set(e) {
				o.url = e;
			}
		}), q = c({
			get() {
				return o.fileData;
			},
			set(e) {
				o.fileData = e;
			}
		}), J = c({
			get() {
				return o.typeSelection;
			},
			set(e) {
				o.typeSelection = e;
			}
		}), Y = c({
			get() {
				return o.layerInfo;
			},
			set(e) {
				o.layerInfo = e;
			}
		}), me = c(() => {
			let t = m.geo.proxy !== "";
			switch (J.value) {
				case e.FEATURE:
				case e.MAPIMAGE:
				case e.TILE:
				case e.IMAGERY: return !t;
				case e.WFS: return !0;
				case e.WMS: return !t;
				case e.GEOJSON:
				case e.SHAPEFILE:
				case e.CSV: return !!($() && !q.value);
				default: return !1;
			}
		}), he = c(() => {
			let e = [s("wizard.format.type.error.failure")];
			return me.value && e.push(s("wizard.format.warn.cors")), e.push(s("wizard.format.warn.vpn")), e.join(". ") + ".";
		});
		_(() => ((O.value === r.FORMAT || O.value === r.CONFIGURE) && (L.value = !0, o.goToStep(r.FORMAT)), !1)), re(() => {
			S.value.push(m.event.on(n.LAYER_LAYERSTATECHANGE, (e) => {
				e.layer.userAdded && (de.value = e.layer.name, H.value = e.state !== t.LOADING && e.state !== t.NEW, U.value = H.value && e.state === t.LOADED);
			})), O.value === r.CONFIGURE && (Y.value?.configOptions.includes("colour") && Ge(), B.value = !Y.value?.configOptions.includes("sublayers") && !!Y.value?.config.name);
		}), g(() => {
			S.value.forEach((e) => m.event.off(e));
		});
		let ge = () => {
			P.value.el.dispatchEvent(new MouseEvent("click"));
		}, X = () => {
			switch (O.value) {
				case 0:
					Z(F);
					break;
				case 1:
					Z(le);
					break;
				case 2:
					Z(ue);
					break;
			}
		};
		function Z(e) {
			(e.value?.$el.querySelectorAll("input, select")[0])?.focus();
		}
		let _e = async (e) => {
			let t = new FileReader();
			t.onload = (n) => {
				q.value = t.result, K.value = e.name, ve(n);
			}, t.readAsArrayBuffer(e);
		}, ve = (e) => {
			e?.preventDefault(), J.value = C.value.guessFormatFromURL(K.value), o.goToStep(r.FORMAT);
		}, ye = async (t) => {
			t?.preventDefault(), k.value = new AbortController(), N.value = !0, L.value = !1, R.value = !1, B.value = !1, V.value = !0, o.goToStep(r.CONFIGURE), W.value = $() ? pe.find((e) => e.value === J.value)?.label : fe.find((e) => e.value === J.value)?.label;
			try {
				Y.value = $() ? await C.value.fetchFileInfo(K.value, J.value, q.value) : await C.value.fetchServiceInfo(K.value, J.value, o.nested, k.value.signal), $() && q.value && (Y.value.config.url = "");
			} catch (e) {
				e.name === "AbortError" ? V.value = !1 : R.value = !0, N.value = !1;
				return;
			}
			let n = J.value === e.FEATURE && !(Y.value && Y.value.fields);
			if (!Y.value || n) {
				L.value = !0, Y.value = {
					config: {
						id: "Placeholder",
						layerType: e.UNKNOWN,
						url: ""
					},
					configOptions: []
				}, N.value = !1;
				return;
			}
			Ge(), B.value = !(Y.value.configOptions.includes("sublayers") || !Y.value.config.name), N.value = !1, V.value = !1;
		}, be = async (e) => {
			e?.preventDefault();
			let t = Object.assign(Y.value.config, e);
			G.value = [], W.value = "";
			let i = m.geo.layer.createLayer(t);
			m.geo.map.addLayer(i).catch(() => {}), i.userAdded = !0, m.event.emit(n.USER_LAYER_ADDED, i), z.value = !1, o.goToStep(r.UPLOAD);
		}, xe = () => Y.value?.fields.map((e) => ({
			value: e.name,
			label: e.alias || e.name
		})), Se = (e) => Y.value?.latLonFields[e].map((e) => ({
			value: e,
			label: e
		})), $ = () => q.value || K.value.match(/\.(zip|csv|json|geojson)$/), Ce = (e) => {
			_e(e), K.value = "";
		}, we = (e, t) => {
			K.value = e.trim(), z.value = t;
		}, Te = (e) => {
			J.value = e, L.value = !1;
		}, Ee = (e) => {
			Y.value.config.name = e.trim();
			let t = Y.value?.config.sublayers;
			B.value = !!(t ? e && t.length > 0 : e.trim());
		}, Oe = (e) => {
			Y.value.config.sublayers = e, B.value = !!(e.length > 0 && Y.value?.config.name);
		}, ze = (t) => {
			if (o.nested = t, G.value = [], ce.value += 1, J.value === e.MAPIMAGE) {
				Y.value.layers = C.value.createLayerHierarchy(Y.value.layersRaw, o.nested);
				let e = new Set((Y.value?.config?.sublayers ?? []).map((e) => e.index));
				o.nested ? Be(Y, e) : He(Y, e);
			} else if (J.value === e.WMS) {
				Y.value.layers = C.value.mapWmsLayerList(Y.value.layersRaw, o.nested);
				let e = new Set((Y.value?.config?.sublayers ?? []).map((e) => e.id));
				o.nested ? Ve(Y, e) : Ue(Y, e);
			}
			Oe(We(G.value));
		}, Be = (e, t) => {
			let n = /* @__PURE__ */ new Map();
			for (let t of e.value.layersRaw) if (t.parentLayerId !== -1) {
				let e = n.get(t.parentLayerId) || [];
				e.push(t.id), n.set(t.parentLayerId, e);
			}
			let r = (e) => {
				let i = n.get(e);
				return i ? i.every((e) => n.has(e) ? r(e) : t.has(e)) : !1;
			}, i = (e) => {
				if (r(e)) G.value.push(e);
				else {
					let r = n.get(e);
					if (r) for (let e of r) t.has(e) && G.value.push(e);
				}
			};
			for (let e of n.keys()) i(e);
			for (let r of e.value.layersRaw) r.parentLayerId === -1 && !n.has(r.id) && t.has(r.id) && G.value.push(r.id);
			G.value = Array.from(new Set(G.value));
		}, Ve = (e, t) => {
			let n = (e) => !e.layers || e.layers.length === 0 ? t.has(e.name) : e.layers.every((e) => n(e)), r = (e) => {
				n(e) ? G.value.push(e.name) : e.layers && e.layers.forEach(r);
			}, i = e.value.layersRaw[0];
			i && i.layers && i.layers.forEach((e) => r(e)), G.value = Array.from(new Set(G.value));
		}, He = (e, t) => {
			let n = (r) => {
				let i = e.value.layersRaw.filter((e) => e.parentLayerId === r);
				if (i.length > 0) for (let e of i) t.has(e.id) ? G.value.push(e.id) : n(e.id);
				else G.value.push(r);
			};
			for (let r of e.value.layersRaw) t.has(r.id) && n(r.id);
			G.value = Array.from(new Set(G.value));
		}, Ue = (e, t) => {
			let n = (e) => {
				e.layers && e.layers.length > 0 ? e.layers.forEach(n) : G.value.push(e.name);
			}, r = e.value.layersRaw[0];
			for (let e of t) {
				let t = r.layers.find((t) => t.name === e);
				t && t.layers && t.layers.length > 0 ? n(t) : t && G.value.push(t.name);
			}
			G.value = Array.from(new Set(G.value));
		}, We = (t) => t.map((t) => {
			switch (J.value) {
				case e.MAPIMAGE: return {
					index: t,
					state: {
						opacity: 1,
						visibility: !0
					}
				};
				case e.WMS: {
					let e = t.lastIndexOf("#");
					return { id: t.substring(0, e) };
				}
				default: return { id: t };
			}
		}), Ge = () => {
			j.value = Y.value?.config.colour ?? "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
		}, Ke = (e) => {
			Y.value.config.colour = e.colors.hex.substring(0, 7), ne(() => {
				y.value.querySelector(".vacp-copy-button").style.backgroundColor = Y.value?.config.colour;
			});
		}, qe = () => {
			z.value = !1, o.goToStep(0), Z(F);
		}, Je = () => {
			N.value = !1, L.value = !1, R.value = !1, z.value = !!K.value, V.value = !1, o.goToStep(0), W.value = "";
		}, Ye = () => {
			G.value = [], B.value = !1, k.value?.abort(), o.goToStep(1);
		};
		return (e, t) => {
			let n = ae("panel-screen");
			return v(), l(n, {
				panel: a.panel,
				ref_key: "thePanel",
				ref: P
			}, {
				header: A(() => [ee(w(T(s)("wizard.title")), 1)]),
				content: A(() => [p(ke, { activeStep: O.value }, {
					default: A(() => [
						p(De, {
							title: T(s)("wizard.upload.title"),
							summary: K.value,
							onFocusPanel: ge,
							onFocusFirstElement: X
						}, {
							default: A(() => [f("form", {
								name: "upload",
								onSubmit: ve,
								onClick: t[1] ||= (e) => H.value = !1
							}, [
								p(Q, {
									type: "file",
									name: "file",
									label: T(s)("wizard.upload.file.label"),
									help: T(s)("wizard.upload.file.help"),
									onUpload: Ce,
									"aria-label": T(s)("wizard.upload.file.label")
								}, null, 8, [
									"label",
									"help",
									"aria-label"
								]),
								f("span", Ae, w(T(s)("wizard.upload.or")), 1),
								p(Q, {
									type: "url",
									name: "url",
									modelValue: K.value,
									"onUpdate:modelValue": t[0] ||= (e) => K.value = e,
									label: T(s)("wizard.upload.url.label"),
									onLink: we,
									validation: !0,
									"validation-messages": {
										required: T(s)("wizard.upload.url.error.required"),
										invalid: T(s)("wizard.upload.url.error.url")
									},
									"aria-label": T(s)("wizard.upload.url.label"),
									ref_key: "stepOneStart",
									ref: F
								}, null, 8, [
									"modelValue",
									"label",
									"validation-messages",
									"aria-label"
								]),
								p(I, {
									onSubmit: ve,
									onCancel: qe,
									disabled: !z.value
								}, null, 8, ["disabled"])
							], 32)]),
							_: 1
						}, 8, ["title", "summary"]),
						p(De, {
							title: T(s)("wizard.format.title"),
							summary: W.value,
							onFocusFirstElement: X
						}, {
							default: A(() => [f("form", {
								name: "format",
								onSubmit: ye
							}, [
								me.value ? (v(), d("div", je, [t[11] ||= f("svg", {
									class: "inline-block fill-current w-16 h-16",
									xmlns: "http://www.w3.org/2000/svg",
									viewBox: "0 0 24 24"
								}, [f("path", {
									d: "M0 0h24v24H0z",
									fill: "none"
								}), f("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" })], -1), f("span", Me, w(T(s)("wizard.format.info.cors")), 1)])) : u("", !0),
								p(Q, {
									type: "select",
									name: "type",
									modelValue: J.value,
									"onUpdate:modelValue": t[2] ||= (e) => J.value = e,
									onSelect: Te,
									size: $() ? pe.length : fe.length,
									label: $() ? T(s)("wizard.format.type.file") : T(s)("wizard.format.type.service"),
									options: $() ? pe : fe,
									formatError: L.value,
									failureError: R.value,
									validation: V.value,
									"validation-messages": {
										required: T(s)("wizard.format.type.error.required"),
										invalid: T(s)("wizard.format.type.error.invalid"),
										failure: he.value
									},
									onKeydown: t[3] ||= oe(() => {}, ["stop"]),
									"aria-label": T(s)("wizard.format.type.service"),
									ref_key: "stepTwoStart",
									ref: le
								}, null, 8, [
									"modelValue",
									"size",
									"label",
									"options",
									"formatError",
									"failureError",
									"validation",
									"validation-messages",
									"aria-label"
								]),
								p(I, {
									onSubmit: ye,
									onCancel: Je,
									animation: !0,
									disabled: N.value
								}, null, 8, ["disabled"])
							], 32)]),
							_: 1
						}, 8, ["title", "summary"]),
						p(De, {
							title: T(s)("wizard.configure.title"),
							onFocusFirstElement: X
						}, {
							default: A(() => [f("form", {
								name: "configure",
								onSubmit: be,
								ref_key: "formElement",
								ref: y
							}, [
								V.value && (L.value || R.value) ? (v(), d("div", Ne, w(L.value ? T(s)("wizard.format.type.error.invalid") : he.value), 1)) : u("", !0),
								Y.value?.configOptions.includes("name") ? (v(), l(Q, {
									key: 1,
									type: "text",
									name: "name",
									modelValue: Y.value.config.name,
									"onUpdate:modelValue": t[4] ||= (e) => Y.value.config.name = e,
									onLink: Ee,
									label: T(s)("wizard.configure.name.label"),
									"aria-label": T(s)("wizard.configure.name.label"),
									validation: !0,
									"validation-messages": { required: T(s)("wizard.configure.name.error.required") },
									ref_key: "stepThreeStart",
									ref: ue,
									onFocusElement: X,
									activeStep: O.value,
									step: 2
								}, null, 8, [
									"modelValue",
									"label",
									"aria-label",
									"validation-messages",
									"activeStep"
								])) : u("", !0),
								Y.value?.configOptions.includes("nameField") ? (v(), l(Q, {
									key: 2,
									type: "select",
									name: "nameField",
									modelValue: Y.value.config.nameField,
									"onUpdate:modelValue": t[5] ||= (e) => Y.value.config.nameField = e,
									label: T(s)("wizard.configure.nameField.label"),
									"aria-label": T(s)("wizard.configure.nameField.label"),
									defaultOption: !0,
									options: xe()
								}, null, 8, [
									"modelValue",
									"label",
									"aria-label",
									"options"
								])) : u("", !0),
								Y.value?.configOptions.includes("maptipField") ? (v(), l(Q, {
									key: 3,
									type: "select",
									name: "maptipField",
									modelValue: Y.value.config.maptipField,
									"onUpdate:modelValue": t[6] ||= (e) => Y.value.config.maptipField = e,
									label: T(s)("wizard.configure.maptipField.label"),
									"aria-label": T(s)("wizard.configure.maptipField.label"),
									options: xe()
								}, null, 8, [
									"modelValue",
									"label",
									"aria-label",
									"options"
								])) : u("", !0),
								Y.value?.configOptions.includes("latField") ? (v(), l(Q, {
									key: 4,
									type: "select",
									name: "latField",
									modelValue: Y.value.config.latField,
									"onUpdate:modelValue": t[7] ||= (e) => Y.value.config.latField = e,
									defaultOption: !0,
									label: T(s)("wizard.configure.latField.label"),
									"aria-label": T(s)("wizard.configure.latField.label"),
									options: Se("lat")
								}, null, 8, [
									"modelValue",
									"label",
									"aria-label",
									"options"
								])) : u("", !0),
								Y.value?.configOptions.includes("longField") ? (v(), l(Q, {
									key: 5,
									type: "select",
									name: "longField",
									modelValue: Y.value.config.longField,
									"onUpdate:modelValue": t[8] ||= (e) => Y.value.config.longField = e,
									defaultOption: !0,
									label: T(s)("wizard.configure.longField.label"),
									"aria-label": T(s)("wizard.configure.longField.label"),
									options: Se("lon")
								}, null, 8, [
									"modelValue",
									"label",
									"aria-label",
									"options"
								])) : u("", !0),
								Y.value?.configOptions.includes("sublayers") ? (v(), d("div", Pe, [p(Q, {
									type: "checkbox",
									name: "nested",
									onNested: ze,
									label: T(s)("wizard.configure.sublayers.nested"),
									"aria-label": T(s)("wizard.configure.sublayers.nested")
								}, null, 8, ["label", "aria-label"]), (v(), l(Q, {
									type: "select",
									key: ce.value,
									name: "sublayers",
									modelValue: Y.value.config.sublayers,
									"onUpdate:modelValue": t[9] ||= (e) => Y.value.config.sublayers = e,
									onSelect: Oe,
									label: T(s)("wizard.configure.sublayers.label"),
									"aria-label": T(s)("wizard.configure.sublayers.label"),
									options: Y.value.layers,
									selectedValues: G.value,
									sublayerOptions: We,
									multiple: !0,
									searchable: !0,
									validation: !0,
									"validation-messages": { required: T(s)("wizard.configure.sublayers.error.required") },
									onKeydown: t[10] ||= oe(() => {}, ["stop"])
								}, null, 8, [
									"modelValue",
									"label",
									"aria-label",
									"options",
									"selectedValues",
									"validation-messages"
								]))])) : u("", !0),
								f("label", {
									class: "sr-only",
									for: `${T(ie)}-color-hex`
								}, w(T(s)("wizard.configure.colour.hex")), 9, Fe),
								Y.value?.configOptions.includes("colour") ? (v(), d("label", Ie, w(T(s)("wizard.configure.colour.label")), 1)) : u("", !0),
								Y.value?.configOptions.includes("colour") ? (v(), l(T(M), {
									key: 8,
									"alpha-channel": "hide",
									"visible-formats": ["hex"],
									"default-format": "hex",
									id: T(ie) + "-hue-slider",
									color: j.value,
									onColorChange: Ke
								}, {
									"hue-range-input-label": A(() => [f("span", Le, w(T(s)("wizard.configure.colour.hue")), 1)]),
									"copy-button": A(() => [f("span", Re, w(T(s)("wizard.configure.colour.copy")), 1), t[12] ||= f("svg", {
										"aria-hidden": "true",
										xmlns: "http://www.w3.org/2000/svg",
										width: "15",
										height: "15",
										viewBox: "0 0 15 15"
									}, [f("path", {
										d: "M5 0v2H1v13h12v-3h-1v2H2V5h10v3h1V2H9V0zm1 1h2v2h3v1H3V3h3z",
										fill: "currentColor"
									}), f("path", {
										d: "M10 7v2h5v2h-5v2l-3-3zM3 6h5v1H3zm0 2h3v1H3zm0 2h3v1H3zm0 2h5v1H3z",
										fill: "currentColor"
									})], -1)]),
									_: 1
								}, 8, ["id", "color"])) : u("", !0),
								p(I, {
									onSubmit: be,
									onCancel: Ye,
									animation: N.value,
									disabled: !B.value
								}, null, 8, ["animation", "disabled"])
							], 544)]),
							_: 1
						}, 8, ["title"])
					]),
					_: 1
				}, 8, ["activeStep"]), H.value ? (v(), d("div", {
					key: 0,
					class: h(["p-3 border-solid border-2", U.value ? "bg-green-100 !border-green-900" : "bg-red-100 !border-red-900"])
				}, w(de.value) + " " + w(T(s)(`wizard.upload.${U.value ? "success" : "fail"}`)), 3)) : u("", !0)]),
				_: 1
			}, 8, ["panel"]);
		};
	}
}), [["__scopeId", "data-v-c7ad6fde"]]);
//#endregion
export { ze as default };
