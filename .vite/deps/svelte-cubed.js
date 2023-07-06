import {
  AmbientLight,
  AnimationMixer,
  Bone,
  BufferGeometry,
  DirectionalLight,
  EventDispatcher,
  Float32BufferAttribute,
  Group,
  HemisphereLight,
  LineBasicMaterial,
  LineSegments,
  MOUSE,
  Matrix3,
  Mesh,
  MeshNormalMaterial,
  NoToneMapping,
  Object3D,
  OrthographicCamera,
  PCFShadowMap,
  PerspectiveCamera,
  PointLight,
  Quaternion,
  Scene,
  Skeleton,
  SkeletonHelper,
  SkinnedMesh,
  Spherical,
  SpotLight,
  TOUCH,
  Vector2,
  Vector3,
  WebGLRenderer,
  three_module_exports
} from "./chunk-33U6ICCL.js";
import "./chunk-LQPJYDVF.js";
import {
  SvelteComponentDev,
  add_location,
  append_dev,
  append_styles,
  attr_dev,
  binding_callbacks,
  check_outros,
  createEventDispatcher,
  create_slot,
  detach_dev,
  dispatch_dev,
  element,
  empty,
  getContext,
  get_all_dirty_from_scope,
  get_slot_changes,
  globals,
  group_outros,
  init,
  insert_dev,
  listen_dev,
  noop,
  onDestroy,
  onMount,
  safe_not_equal,
  setContext,
  space,
  tick,
  transition_in,
  transition_out,
  update_slot_base,
  validate_slots
} from "./chunk-VWMEQJML.js";
import {
  __export
} from "./chunk-JC4IRQUL.js";

// node_modules/.deno/svelte-cubed@0.2.1/node_modules/svelte-cubed/utils/context.js
var ROOT = {};
var PARENT = {};
function setup(self) {
  const root = getContext(ROOT);
  const parent = getContext(PARENT) || root.scene;
  if (self) {
    setContext(PARENT, self);
    parent.add(self);
    onDestroy(() => {
      parent.remove(self);
      root.invalidate();
    });
  }
  return {
    root,
    parent,
    self
  };
}
function get_root() {
  return getContext(ROOT);
}
function set_root(context) {
  setContext(ROOT, context);
  return context;
}
function getInvalidator() {
  return get_root().invalidate;
}
function getCapabilities() {
  return get_root().renderer.capabilities;
}

// node_modules/.deno/svelte-cubed@0.2.1/node_modules/svelte-cubed/components/Canvas.svelte
var { console: console_1 } = globals;
var file = "node_modules/.deno/svelte-cubed@0.2.1/node_modules/svelte-cubed/components/Canvas.svelte";
function add_css(target) {
  append_styles(target, "svelte-1uqz219", ".container.svelte-1uqz219,canvas.svelte-1uqz219{position:absolute;width:100%;height:100%;left:0;top:0}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FudmFzLnN2ZWx0ZSIsIm1hcHBpbmdzIjoiQUE2T0MseUJBQVUsQ0FDVixxQkFBTyxDQUNOLFFBQVEsQ0FBRSxRQUFRLENBQ2xCLEtBQUssQ0FBRSxJQUFJLENBQ1gsTUFBTSxDQUFFLElBQUksQ0FDWixJQUFJLENBQUUsQ0FBQyxDQUNQLEdBQUcsQ0FBRSxDQUNOIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkNhbnZhcy5zdmVsdGUiXX0= */");
}
function create_if_block(ctx) {
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[37].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[36],
    null
  );
  const block = {
    c: function create() {
      if (default_slot)
        default_slot.c();
    },
    m: function mount(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p: function update(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty[1] & /*$$scope*/
        32)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[36],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[36]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[36],
              dirty,
              null
            ),
            null
          );
        }
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (default_slot)
        default_slot.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block.name,
    type: "if",
    source: "(232:1) {#if root.scene}",
    ctx
  });
  return block;
}
function create_fragment(ctx) {
  let div;
  let canvas;
  let t;
  let current;
  let mounted;
  let dispose;
  let if_block = (
    /*root*/
    ctx[0].scene && create_if_block(ctx)
  );
  const block = {
    c: function create() {
      div = element("div");
      canvas = element("canvas");
      t = space();
      if (if_block)
        if_block.c();
      attr_dev(canvas, "class", "svelte-1uqz219");
      add_location(canvas, file, 229, 1, 5682);
      attr_dev(div, "class", "container svelte-1uqz219");
      add_location(div, file, 228, 0, 5635);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, canvas);
      ctx[38](canvas);
      append_dev(div, t);
      if (if_block)
        if_block.m(div, null);
      ctx[39](div);
      current = true;
      if (!mounted) {
        dispose = listen_dev(
          window,
          "resize",
          /*resize*/
          ctx[2],
          false,
          false,
          false,
          false
        );
        mounted = true;
      }
    },
    p: function update(ctx2, dirty) {
      if (
        /*root*/
        ctx2[0].scene
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty[0] & /*root*/
          1) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(div, null);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      ctx[38](null);
      if (if_block)
        if_block.d();
      ctx[39](null);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Canvas", slots, ["default"]);
  let { background = null } = $$props;
  let { environment = null } = $$props;
  let { fog = null } = $$props;
  let { overrideMaterial = null } = $$props;
  let { precision = "highp" } = $$props;
  let { powerPreference = "default" } = $$props;
  let { alpha = false } = $$props;
  let { premultipliedAlpha = true } = $$props;
  let { antialias = false } = $$props;
  let { stencil = true } = $$props;
  let { preserveDrawingBuffer = false } = $$props;
  let { failIfMajorPerformanceCaveat = false } = $$props;
  let { depth = true } = $$props;
  let { logarithmicDepthBuffer = false } = $$props;
  let { autoClear = true } = $$props;
  let { autoClearColor = true } = $$props;
  let { autoClearDepth = true } = $$props;
  let { autoClearStencil = true } = $$props;
  let { checkShaderErrors = true } = $$props;
  let { gammaFactor = 2 } = $$props;
  let { localClippingEnabled = false } = $$props;
  let { physicallyCorrectLights = false } = $$props;
  let { outputEncoding = void 0 } = $$props;
  let { clippingPlanes = [] } = $$props;
  let { shadows = void 0 } = $$props;
  let { toneMapping = NoToneMapping } = $$props;
  let { toneMappingExposure = 1 } = $$props;
  let { width = void 0 } = $$props;
  let { height = void 0 } = $$props;
  let { pixelRatio = typeof devicePixelRatio !== "undefined" ? devicePixelRatio : 1 } = $$props;
  function info() {
    return root.renderer.info;
  }
  let _width;
  let _height;
  let container;
  let frame = null;
  const run = (fn) => fn();
  const invalidate = () => {
    if (frame)
      return;
    frame = requestAnimationFrame(() => {
      frame = null;
      before_render.forEach(run);
      root.renderer.render(root.scene, root.camera.object);
    });
  };
  const before_render = [];
  const root = set_root({
    canvas: null,
    scene: null,
    renderer: null,
    camera: {
      object: null,
      callback: () => {
        console.warn("no camera is set");
      },
      set: (camera, callback) => {
        $$invalidate(0, root.camera.object = camera, root);
        $$invalidate(0, root.camera.callback = callback, root);
        if (root.controls.callback) {
          root.controls.callback(root.camera.object, root.canvas);
        }
        invalidate();
      }
    },
    controls: {
      object: null,
      callback: null,
      set: (callback) => {
        $$invalidate(0, root.controls.callback = callback, root);
        if (root.camera.object) {
          $$invalidate(0, root.controls.object = callback(root.camera.object, root.canvas), root);
        }
      }
    },
    before_render(fn) {
      before_render.push(fn);
      onDestroy(() => {
        const i = before_render.indexOf(fn);
        before_render.splice(i, 1);
      });
    },
    invalidate
  });
  onMount(() => {
    $$invalidate(
      0,
      root.renderer = new WebGLRenderer({
        canvas: root.canvas,
        precision,
        powerPreference,
        alpha,
        premultipliedAlpha,
        antialias,
        stencil,
        preserveDrawingBuffer,
        failIfMajorPerformanceCaveat,
        depth,
        logarithmicDepthBuffer
      }),
      root
    );
    $$invalidate(0, root.scene = new Scene(), root);
    resize();
    return () => {
      console.log("disposing of renderer");
      root.renderer.forceContextLoss();
      root.renderer.dispose();
    };
  });
  const resize = () => {
    if (width === void 0) {
      $$invalidate(34, _width = container.clientWidth / pixelRatio);
    }
    if (height === void 0) {
      $$invalidate(35, _height = container.clientHeight / pixelRatio);
    }
  };
  const writable_props = [
    "background",
    "environment",
    "fog",
    "overrideMaterial",
    "precision",
    "powerPreference",
    "alpha",
    "premultipliedAlpha",
    "antialias",
    "stencil",
    "preserveDrawingBuffer",
    "failIfMajorPerformanceCaveat",
    "depth",
    "logarithmicDepthBuffer",
    "autoClear",
    "autoClearColor",
    "autoClearDepth",
    "autoClearStencil",
    "checkShaderErrors",
    "gammaFactor",
    "localClippingEnabled",
    "physicallyCorrectLights",
    "outputEncoding",
    "clippingPlanes",
    "shadows",
    "toneMapping",
    "toneMappingExposure",
    "width",
    "height",
    "pixelRatio"
  ];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console_1.warn(`<Canvas> was created with unknown prop '${key}'`);
  });
  function canvas_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      root.canvas = $$value;
      $$invalidate(0, root), $$invalidate(3, background), $$invalidate(4, environment), $$invalidate(5, fog), $$invalidate(6, overrideMaterial), $$invalidate(17, autoClear), $$invalidate(18, autoClearColor), $$invalidate(19, autoClearDepth), $$invalidate(20, autoClearStencil), $$invalidate(21, checkShaderErrors), $$invalidate(22, gammaFactor), $$invalidate(23, localClippingEnabled), $$invalidate(24, physicallyCorrectLights), $$invalidate(25, outputEncoding), $$invalidate(26, clippingPlanes), $$invalidate(28, toneMapping), $$invalidate(29, toneMappingExposure), $$invalidate(27, shadows);
    });
  }
  function div_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      container = $$value;
      $$invalidate(1, container);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("background" in $$props2)
      $$invalidate(3, background = $$props2.background);
    if ("environment" in $$props2)
      $$invalidate(4, environment = $$props2.environment);
    if ("fog" in $$props2)
      $$invalidate(5, fog = $$props2.fog);
    if ("overrideMaterial" in $$props2)
      $$invalidate(6, overrideMaterial = $$props2.overrideMaterial);
    if ("precision" in $$props2)
      $$invalidate(7, precision = $$props2.precision);
    if ("powerPreference" in $$props2)
      $$invalidate(8, powerPreference = $$props2.powerPreference);
    if ("alpha" in $$props2)
      $$invalidate(9, alpha = $$props2.alpha);
    if ("premultipliedAlpha" in $$props2)
      $$invalidate(10, premultipliedAlpha = $$props2.premultipliedAlpha);
    if ("antialias" in $$props2)
      $$invalidate(11, antialias = $$props2.antialias);
    if ("stencil" in $$props2)
      $$invalidate(12, stencil = $$props2.stencil);
    if ("preserveDrawingBuffer" in $$props2)
      $$invalidate(13, preserveDrawingBuffer = $$props2.preserveDrawingBuffer);
    if ("failIfMajorPerformanceCaveat" in $$props2)
      $$invalidate(14, failIfMajorPerformanceCaveat = $$props2.failIfMajorPerformanceCaveat);
    if ("depth" in $$props2)
      $$invalidate(15, depth = $$props2.depth);
    if ("logarithmicDepthBuffer" in $$props2)
      $$invalidate(16, logarithmicDepthBuffer = $$props2.logarithmicDepthBuffer);
    if ("autoClear" in $$props2)
      $$invalidate(17, autoClear = $$props2.autoClear);
    if ("autoClearColor" in $$props2)
      $$invalidate(18, autoClearColor = $$props2.autoClearColor);
    if ("autoClearDepth" in $$props2)
      $$invalidate(19, autoClearDepth = $$props2.autoClearDepth);
    if ("autoClearStencil" in $$props2)
      $$invalidate(20, autoClearStencil = $$props2.autoClearStencil);
    if ("checkShaderErrors" in $$props2)
      $$invalidate(21, checkShaderErrors = $$props2.checkShaderErrors);
    if ("gammaFactor" in $$props2)
      $$invalidate(22, gammaFactor = $$props2.gammaFactor);
    if ("localClippingEnabled" in $$props2)
      $$invalidate(23, localClippingEnabled = $$props2.localClippingEnabled);
    if ("physicallyCorrectLights" in $$props2)
      $$invalidate(24, physicallyCorrectLights = $$props2.physicallyCorrectLights);
    if ("outputEncoding" in $$props2)
      $$invalidate(25, outputEncoding = $$props2.outputEncoding);
    if ("clippingPlanes" in $$props2)
      $$invalidate(26, clippingPlanes = $$props2.clippingPlanes);
    if ("shadows" in $$props2)
      $$invalidate(27, shadows = $$props2.shadows);
    if ("toneMapping" in $$props2)
      $$invalidate(28, toneMapping = $$props2.toneMapping);
    if ("toneMappingExposure" in $$props2)
      $$invalidate(29, toneMappingExposure = $$props2.toneMappingExposure);
    if ("width" in $$props2)
      $$invalidate(30, width = $$props2.width);
    if ("height" in $$props2)
      $$invalidate(31, height = $$props2.height);
    if ("pixelRatio" in $$props2)
      $$invalidate(32, pixelRatio = $$props2.pixelRatio);
    if ("$$scope" in $$props2)
      $$invalidate(36, $$scope = $$props2.$$scope);
  };
  $$self.$capture_state = () => ({
    set_root,
    onDestroy,
    onMount,
    THREE: three_module_exports,
    background,
    environment,
    fog,
    overrideMaterial,
    precision,
    powerPreference,
    alpha,
    premultipliedAlpha,
    antialias,
    stencil,
    preserveDrawingBuffer,
    failIfMajorPerformanceCaveat,
    depth,
    logarithmicDepthBuffer,
    autoClear,
    autoClearColor,
    autoClearDepth,
    autoClearStencil,
    checkShaderErrors,
    gammaFactor,
    localClippingEnabled,
    physicallyCorrectLights,
    outputEncoding,
    clippingPlanes,
    shadows,
    toneMapping,
    toneMappingExposure,
    width,
    height,
    pixelRatio,
    info,
    _width,
    _height,
    container,
    frame,
    run,
    invalidate,
    before_render,
    root,
    resize
  });
  $$self.$inject_state = ($$props2) => {
    if ("background" in $$props2)
      $$invalidate(3, background = $$props2.background);
    if ("environment" in $$props2)
      $$invalidate(4, environment = $$props2.environment);
    if ("fog" in $$props2)
      $$invalidate(5, fog = $$props2.fog);
    if ("overrideMaterial" in $$props2)
      $$invalidate(6, overrideMaterial = $$props2.overrideMaterial);
    if ("precision" in $$props2)
      $$invalidate(7, precision = $$props2.precision);
    if ("powerPreference" in $$props2)
      $$invalidate(8, powerPreference = $$props2.powerPreference);
    if ("alpha" in $$props2)
      $$invalidate(9, alpha = $$props2.alpha);
    if ("premultipliedAlpha" in $$props2)
      $$invalidate(10, premultipliedAlpha = $$props2.premultipliedAlpha);
    if ("antialias" in $$props2)
      $$invalidate(11, antialias = $$props2.antialias);
    if ("stencil" in $$props2)
      $$invalidate(12, stencil = $$props2.stencil);
    if ("preserveDrawingBuffer" in $$props2)
      $$invalidate(13, preserveDrawingBuffer = $$props2.preserveDrawingBuffer);
    if ("failIfMajorPerformanceCaveat" in $$props2)
      $$invalidate(14, failIfMajorPerformanceCaveat = $$props2.failIfMajorPerformanceCaveat);
    if ("depth" in $$props2)
      $$invalidate(15, depth = $$props2.depth);
    if ("logarithmicDepthBuffer" in $$props2)
      $$invalidate(16, logarithmicDepthBuffer = $$props2.logarithmicDepthBuffer);
    if ("autoClear" in $$props2)
      $$invalidate(17, autoClear = $$props2.autoClear);
    if ("autoClearColor" in $$props2)
      $$invalidate(18, autoClearColor = $$props2.autoClearColor);
    if ("autoClearDepth" in $$props2)
      $$invalidate(19, autoClearDepth = $$props2.autoClearDepth);
    if ("autoClearStencil" in $$props2)
      $$invalidate(20, autoClearStencil = $$props2.autoClearStencil);
    if ("checkShaderErrors" in $$props2)
      $$invalidate(21, checkShaderErrors = $$props2.checkShaderErrors);
    if ("gammaFactor" in $$props2)
      $$invalidate(22, gammaFactor = $$props2.gammaFactor);
    if ("localClippingEnabled" in $$props2)
      $$invalidate(23, localClippingEnabled = $$props2.localClippingEnabled);
    if ("physicallyCorrectLights" in $$props2)
      $$invalidate(24, physicallyCorrectLights = $$props2.physicallyCorrectLights);
    if ("outputEncoding" in $$props2)
      $$invalidate(25, outputEncoding = $$props2.outputEncoding);
    if ("clippingPlanes" in $$props2)
      $$invalidate(26, clippingPlanes = $$props2.clippingPlanes);
    if ("shadows" in $$props2)
      $$invalidate(27, shadows = $$props2.shadows);
    if ("toneMapping" in $$props2)
      $$invalidate(28, toneMapping = $$props2.toneMapping);
    if ("toneMappingExposure" in $$props2)
      $$invalidate(29, toneMappingExposure = $$props2.toneMappingExposure);
    if ("width" in $$props2)
      $$invalidate(30, width = $$props2.width);
    if ("height" in $$props2)
      $$invalidate(31, height = $$props2.height);
    if ("pixelRatio" in $$props2)
      $$invalidate(32, pixelRatio = $$props2.pixelRatio);
    if ("_width" in $$props2)
      $$invalidate(34, _width = $$props2._width);
    if ("_height" in $$props2)
      $$invalidate(35, _height = $$props2._height);
    if ("container" in $$props2)
      $$invalidate(1, container = $$props2.container);
    if ("frame" in $$props2)
      frame = $$props2.frame;
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty[0] & /*root, background, environment, fog, overrideMaterial*/
    121) {
      $:
        if (root.scene) {
          $$invalidate(0, root.scene.background = background, root);
          $$invalidate(0, root.scene.environment = environment, root);
          $$invalidate(0, root.scene.fog = fog, root);
          $$invalidate(0, root.scene.overrideMaterial = overrideMaterial, root);
        }
    }
    if ($$self.$$.dirty[0] & /*root, autoClear, autoClearColor, autoClearDepth, autoClearStencil, checkShaderErrors, gammaFactor, localClippingEnabled, physicallyCorrectLights, outputEncoding, clippingPlanes, toneMapping, toneMappingExposure, shadows*/
    1073610753) {
      $:
        if (root.renderer) {
          $$invalidate(0, root.renderer.autoClear = autoClear, root);
          $$invalidate(0, root.renderer.autoClearColor = autoClearColor, root);
          $$invalidate(0, root.renderer.autoClearDepth = autoClearDepth, root);
          $$invalidate(0, root.renderer.autoClearStencil = autoClearStencil, root);
          $$invalidate(0, root.renderer.debug.checkShaderErrors = checkShaderErrors, root);
          $$invalidate(0, root.renderer.gammaFactor = gammaFactor, root);
          $$invalidate(0, root.renderer.localClippingEnabled = localClippingEnabled, root);
          $$invalidate(0, root.renderer.physicallyCorrectLights = physicallyCorrectLights, root);
          if (outputEncoding != null)
            $$invalidate(0, root.renderer.outputEncoding = outputEncoding, root);
          $$invalidate(0, root.renderer.clippingPlanes = clippingPlanes, root);
          $$invalidate(0, root.renderer.toneMapping = toneMapping, root);
          $$invalidate(0, root.renderer.toneMappingExposure = toneMappingExposure, root);
          if (shadows) {
            $$invalidate(0, root.renderer.shadowMap.enabled = true, root);
            $$invalidate(0, root.renderer.shadowMap.autoUpdate = true, root);
            $$invalidate(0, root.renderer.shadowMap.type = shadows === true ? PCFShadowMap : shadows, root);
          } else {
            $$invalidate(0, root.renderer.shadowMap.enabled = false, root);
          }
          invalidate();
        }
    }
    if ($$self.$$.dirty[0] & /*root, width*/
    1073741825 | $$self.$$.dirty[1] & /*_width, height, _height, pixelRatio*/
    27) {
      $:
        if (root.renderer) {
          const w = width !== void 0 ? width : _width;
          const h = height !== void 0 ? height : _height;
          root.renderer.setSize(w, h, false);
          root.camera.callback(w, h);
          root.renderer.setPixelRatio(pixelRatio);
          invalidate();
        }
    }
  };
  return [
    root,
    container,
    resize,
    background,
    environment,
    fog,
    overrideMaterial,
    precision,
    powerPreference,
    alpha,
    premultipliedAlpha,
    antialias,
    stencil,
    preserveDrawingBuffer,
    failIfMajorPerformanceCaveat,
    depth,
    logarithmicDepthBuffer,
    autoClear,
    autoClearColor,
    autoClearDepth,
    autoClearStencil,
    checkShaderErrors,
    gammaFactor,
    localClippingEnabled,
    physicallyCorrectLights,
    outputEncoding,
    clippingPlanes,
    shadows,
    toneMapping,
    toneMappingExposure,
    width,
    height,
    pixelRatio,
    info,
    _width,
    _height,
    $$scope,
    slots,
    canvas_binding,
    div_binding
  ];
}
var Canvas = class extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(
      this,
      options,
      instance,
      create_fragment,
      safe_not_equal,
      {
        background: 3,
        environment: 4,
        fog: 5,
        overrideMaterial: 6,
        precision: 7,
        powerPreference: 8,
        alpha: 9,
        premultipliedAlpha: 10,
        antialias: 11,
        stencil: 12,
        preserveDrawingBuffer: 13,
        failIfMajorPerformanceCaveat: 14,
        depth: 15,
        logarithmicDepthBuffer: 16,
        autoClear: 17,
        autoClearColor: 18,
        autoClearDepth: 19,
        autoClearStencil: 20,
        checkShaderErrors: 21,
        gammaFactor: 22,
        localClippingEnabled: 23,
        physicallyCorrectLights: 24,
        outputEncoding: 25,
        clippingPlanes: 26,
        shadows: 27,
        toneMapping: 28,
        toneMappingExposure: 29,
        width: 30,
        height: 31,
        pixelRatio: 32,
        info: 33
      },
      add_css,
      [-1, -1]
    );
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Canvas",
      options,
      id: create_fragment.name
    });
  }
  get background() {
    throw new Error("<Canvas>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set background(value) {
    throw new Error("<Canvas>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get environment() {
    throw new Error("<Canvas>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set environment(value) {
    throw new Error("<Canvas>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get fog() {
    throw new Error("<Canvas>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set fog(value) {
    throw new Error("<Canvas>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get overrideMaterial() {
    throw new Error("<Canvas>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set overrideMaterial(value) {
    throw new Error("<Canvas>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get precision() {
    throw new Error("<Canvas>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set precision(value) {
    throw new Error("<Canvas>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get powerPreference() {
    throw new Error("<Canvas>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set powerPreference(value) {
    throw new Error("<Canvas>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get alpha() {
    throw new Error("<Canvas>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set alpha(value) {
    throw new Error("<Canvas>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get premultipliedAlpha() {
    throw new Error("<Canvas>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set premultipliedAlpha(value) {
    throw new Error("<Canvas>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get antialias() {
    throw new Error("<Canvas>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set antialias(value) {
    throw new Error("<Canvas>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get stencil() {
    throw new Error("<Canvas>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set stencil(value) {
    throw new Error("<Canvas>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get preserveDrawingBuffer() {
    throw new Error("<Canvas>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set preserveDrawingBuffer(value) {
    throw new Error("<Canvas>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get failIfMajorPerformanceCaveat() {
    throw new Error("<Canvas>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set failIfMajorPerformanceCaveat(value) {
    throw new Error("<Canvas>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get depth() {
    throw new Error("<Canvas>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set depth(value) {
    throw new Error("<Canvas>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get logarithmicDepthBuffer() {
    throw new Error("<Canvas>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set logarithmicDepthBuffer(value) {
    throw new Error("<Canvas>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get autoClear() {
    throw new Error("<Canvas>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set autoClear(value) {
    throw new Error("<Canvas>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get autoClearColor() {
    throw new Error("<Canvas>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set autoClearColor(value) {
    throw new Error("<Canvas>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get autoClearDepth() {
    throw new Error("<Canvas>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set autoClearDepth(value) {
    throw new Error("<Canvas>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get autoClearStencil() {
    throw new Error("<Canvas>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set autoClearStencil(value) {
    throw new Error("<Canvas>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get checkShaderErrors() {
    throw new Error("<Canvas>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set checkShaderErrors(value) {
    throw new Error("<Canvas>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get gammaFactor() {
    throw new Error("<Canvas>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set gammaFactor(value) {
    throw new Error("<Canvas>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get localClippingEnabled() {
    throw new Error("<Canvas>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set localClippingEnabled(value) {
    throw new Error("<Canvas>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get physicallyCorrectLights() {
    throw new Error("<Canvas>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set physicallyCorrectLights(value) {
    throw new Error("<Canvas>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get outputEncoding() {
    throw new Error("<Canvas>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set outputEncoding(value) {
    throw new Error("<Canvas>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get clippingPlanes() {
    throw new Error("<Canvas>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set clippingPlanes(value) {
    throw new Error("<Canvas>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get shadows() {
    throw new Error("<Canvas>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set shadows(value) {
    throw new Error("<Canvas>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get toneMapping() {
    throw new Error("<Canvas>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set toneMapping(value) {
    throw new Error("<Canvas>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get toneMappingExposure() {
    throw new Error("<Canvas>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set toneMappingExposure(value) {
    throw new Error("<Canvas>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get width() {
    throw new Error("<Canvas>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set width(value) {
    throw new Error("<Canvas>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get height() {
    throw new Error("<Canvas>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set height(value) {
    throw new Error("<Canvas>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get pixelRatio() {
    throw new Error("<Canvas>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set pixelRatio(value) {
    throw new Error("<Canvas>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get info() {
    return this.$$.ctx[33];
  }
  set info(value) {
    throw new Error("<Canvas>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
};
var Canvas_default = Canvas;

// node_modules/.deno/svelte-cubed@0.2.1/node_modules/svelte-cubed/utils/object.js
function transform(object, position2, rotation2, scale2) {
  object.position.set(position2[0], position2[1], position2[2]);
  object.rotation.set(rotation2[0], rotation2[1], rotation2[2], rotation2[3]);
  if (typeof scale2 === "number") {
    object.scale.set(scale2, scale2, scale2);
  } else {
    object.scale.set(scale2[0], scale2[1], scale2[2]);
  }
}

// node_modules/.deno/svelte-cubed@0.2.1/node_modules/svelte-cubed/utils/defaults.js
var defaults_exports = {};
__export(defaults_exports, {
  geometry: () => geometry,
  material: () => material,
  position: () => position,
  rotation: () => rotation,
  scale: () => scale
});
var position = [0, 0, 0];
var rotation = [0, 0, 0];
var scale = [1, 1, 1];
var geometry = new BufferGeometry();
var material = new MeshNormalMaterial();

// node_modules/.deno/svelte-cubed@0.2.1/node_modules/svelte-cubed/components/objects/Bone.svelte
function create_fragment2(ctx) {
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[4].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[3],
    null
  );
  const block = {
    c: function create() {
      if (default_slot)
        default_slot.c();
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        8)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[3],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[3]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[3],
              dirty,
              null
            ),
            null
          );
        }
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (default_slot)
        default_slot.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment2.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance2($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Bone", slots, ["default"]);
  let { position: position2 = position } = $$props;
  let { rotation: rotation2 = rotation } = $$props;
  let { scale: scale2 = scale } = $$props;
  const { root, self } = setup(new Bone());
  const writable_props = ["position", "rotation", "scale"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Bone> was created with unknown prop '${key}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("position" in $$props2)
      $$invalidate(0, position2 = $$props2.position);
    if ("rotation" in $$props2)
      $$invalidate(1, rotation2 = $$props2.rotation);
    if ("scale" in $$props2)
      $$invalidate(2, scale2 = $$props2.scale);
    if ("$$scope" in $$props2)
      $$invalidate(3, $$scope = $$props2.$$scope);
  };
  $$self.$capture_state = () => ({
    THREE: three_module_exports,
    setup,
    transform,
    defaults: defaults_exports,
    position: position2,
    rotation: rotation2,
    scale: scale2,
    root,
    self
  });
  $$self.$inject_state = ($$props2) => {
    if ("position" in $$props2)
      $$invalidate(0, position2 = $$props2.position);
    if ("rotation" in $$props2)
      $$invalidate(1, rotation2 = $$props2.rotation);
    if ("scale" in $$props2)
      $$invalidate(2, scale2 = $$props2.scale);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*position, rotation, scale*/
    7) {
      $: {
        transform(self, position2, rotation2, scale2);
        root.invalidate();
      }
    }
  };
  return [position2, rotation2, scale2, $$scope, slots];
}
var Bone2 = class extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance2, create_fragment2, safe_not_equal, { position: 0, rotation: 1, scale: 2 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Bone",
      options,
      id: create_fragment2.name
    });
  }
  get position() {
    throw new Error("<Bone>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set position(value) {
    throw new Error("<Bone>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get rotation() {
    throw new Error("<Bone>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set rotation(value) {
    throw new Error("<Bone>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get scale() {
    throw new Error("<Bone>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set scale(value) {
    throw new Error("<Bone>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
};
var Bone_default = Bone2;

// node_modules/.deno/svelte-cubed@0.2.1/node_modules/svelte-cubed/components/objects/Group.svelte
function create_fragment3(ctx) {
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[6].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[5],
    null
  );
  const block = {
    c: function create() {
      if (default_slot)
        default_slot.c();
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        32)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[5],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[5]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[5],
              dirty,
              null
            ),
            null
          );
        }
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (default_slot)
        default_slot.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment3.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance3($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Group", slots, ["default"]);
  let { position: position2 = position } = $$props;
  let { rotation: rotation2 = rotation } = $$props;
  let { scale: scale2 = scale } = $$props;
  let { renderOrder = 0 } = $$props;
  const { root, self } = setup(new Group());
  const writable_props = ["position", "rotation", "scale", "renderOrder"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Group> was created with unknown prop '${key}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("position" in $$props2)
      $$invalidate(0, position2 = $$props2.position);
    if ("rotation" in $$props2)
      $$invalidate(1, rotation2 = $$props2.rotation);
    if ("scale" in $$props2)
      $$invalidate(2, scale2 = $$props2.scale);
    if ("renderOrder" in $$props2)
      $$invalidate(3, renderOrder = $$props2.renderOrder);
    if ("$$scope" in $$props2)
      $$invalidate(5, $$scope = $$props2.$$scope);
  };
  $$self.$capture_state = () => ({
    THREE: three_module_exports,
    setup,
    transform,
    defaults: defaults_exports,
    position: position2,
    rotation: rotation2,
    scale: scale2,
    renderOrder,
    root,
    self
  });
  $$self.$inject_state = ($$props2) => {
    if ("position" in $$props2)
      $$invalidate(0, position2 = $$props2.position);
    if ("rotation" in $$props2)
      $$invalidate(1, rotation2 = $$props2.rotation);
    if ("scale" in $$props2)
      $$invalidate(2, scale2 = $$props2.scale);
    if ("renderOrder" in $$props2)
      $$invalidate(3, renderOrder = $$props2.renderOrder);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*renderOrder, self, position, rotation, scale*/
    31) {
      $: {
        $$invalidate(4, self.renderOrder = renderOrder, self);
        transform(self, position2, rotation2, scale2);
        root.invalidate();
      }
    }
  };
  return [position2, rotation2, scale2, renderOrder, self, $$scope, slots];
}
var Group2 = class extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance3, create_fragment3, safe_not_equal, {
      position: 0,
      rotation: 1,
      scale: 2,
      renderOrder: 3
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Group",
      options,
      id: create_fragment3.name
    });
  }
  get position() {
    throw new Error("<Group>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set position(value) {
    throw new Error("<Group>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get rotation() {
    throw new Error("<Group>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set rotation(value) {
    throw new Error("<Group>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get scale() {
    throw new Error("<Group>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set scale(value) {
    throw new Error("<Group>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get renderOrder() {
    throw new Error("<Group>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set renderOrder(value) {
    throw new Error("<Group>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
};
var Group_default = Group2;

// node_modules/.deno/svelte-cubed@0.2.1/node_modules/svelte-cubed/components/objects/Mesh.svelte
function create_fragment4(ctx) {
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[11].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[10],
    null
  );
  const block = {
    c: function create() {
      if (default_slot)
        default_slot.c();
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        1024)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[10],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[10]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[10],
              dirty,
              null
            ),
            null
          );
        }
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (default_slot)
        default_slot.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment4.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance4($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Mesh", slots, ["default"]);
  let { geometry: geometry2 = geometry } = $$props;
  let { material: material2 = material } = $$props;
  let { position: position2 = position } = $$props;
  let { rotation: rotation2 = rotation } = $$props;
  let { scale: scale2 = scale } = $$props;
  let { castShadow = false } = $$props;
  let { receiveShadow = false } = $$props;
  let { frustumCulled = true } = $$props;
  let { renderOrder = 0 } = $$props;
  const { root, self } = setup(new Mesh(geometry2, material2));
  const writable_props = [
    "geometry",
    "material",
    "position",
    "rotation",
    "scale",
    "castShadow",
    "receiveShadow",
    "frustumCulled",
    "renderOrder"
  ];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Mesh> was created with unknown prop '${key}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("geometry" in $$props2)
      $$invalidate(0, geometry2 = $$props2.geometry);
    if ("material" in $$props2)
      $$invalidate(1, material2 = $$props2.material);
    if ("position" in $$props2)
      $$invalidate(2, position2 = $$props2.position);
    if ("rotation" in $$props2)
      $$invalidate(3, rotation2 = $$props2.rotation);
    if ("scale" in $$props2)
      $$invalidate(4, scale2 = $$props2.scale);
    if ("castShadow" in $$props2)
      $$invalidate(5, castShadow = $$props2.castShadow);
    if ("receiveShadow" in $$props2)
      $$invalidate(6, receiveShadow = $$props2.receiveShadow);
    if ("frustumCulled" in $$props2)
      $$invalidate(7, frustumCulled = $$props2.frustumCulled);
    if ("renderOrder" in $$props2)
      $$invalidate(8, renderOrder = $$props2.renderOrder);
    if ("$$scope" in $$props2)
      $$invalidate(10, $$scope = $$props2.$$scope);
  };
  $$self.$capture_state = () => ({
    THREE: three_module_exports,
    setup,
    transform,
    defaults: defaults_exports,
    geometry: geometry2,
    material: material2,
    position: position2,
    rotation: rotation2,
    scale: scale2,
    castShadow,
    receiveShadow,
    frustumCulled,
    renderOrder,
    root,
    self
  });
  $$self.$inject_state = ($$props2) => {
    if ("geometry" in $$props2)
      $$invalidate(0, geometry2 = $$props2.geometry);
    if ("material" in $$props2)
      $$invalidate(1, material2 = $$props2.material);
    if ("position" in $$props2)
      $$invalidate(2, position2 = $$props2.position);
    if ("rotation" in $$props2)
      $$invalidate(3, rotation2 = $$props2.rotation);
    if ("scale" in $$props2)
      $$invalidate(4, scale2 = $$props2.scale);
    if ("castShadow" in $$props2)
      $$invalidate(5, castShadow = $$props2.castShadow);
    if ("receiveShadow" in $$props2)
      $$invalidate(6, receiveShadow = $$props2.receiveShadow);
    if ("frustumCulled" in $$props2)
      $$invalidate(7, frustumCulled = $$props2.frustumCulled);
    if ("renderOrder" in $$props2)
      $$invalidate(8, renderOrder = $$props2.renderOrder);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*self, geometry, material, castShadow, receiveShadow, frustumCulled, renderOrder, position, rotation, scale*/
    1023) {
      $: {
        if (self.geometry && geometry2 !== self.geometry) {
          self.geometry.dispose();
        }
        $$invalidate(9, self.geometry = geometry2, self);
        $$invalidate(9, self.material = material2, self);
        $$invalidate(9, self.castShadow = castShadow, self);
        $$invalidate(9, self.receiveShadow = receiveShadow, self);
        $$invalidate(9, self.frustumCulled = frustumCulled, self);
        $$invalidate(9, self.renderOrder = renderOrder, self);
        transform(self, position2, rotation2, scale2);
        root.invalidate();
      }
    }
  };
  return [
    geometry2,
    material2,
    position2,
    rotation2,
    scale2,
    castShadow,
    receiveShadow,
    frustumCulled,
    renderOrder,
    self,
    $$scope,
    slots
  ];
}
var Mesh2 = class extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance4, create_fragment4, safe_not_equal, {
      geometry: 0,
      material: 1,
      position: 2,
      rotation: 3,
      scale: 4,
      castShadow: 5,
      receiveShadow: 6,
      frustumCulled: 7,
      renderOrder: 8
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Mesh",
      options,
      id: create_fragment4.name
    });
  }
  get geometry() {
    throw new Error("<Mesh>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set geometry(value) {
    throw new Error("<Mesh>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get material() {
    throw new Error("<Mesh>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set material(value) {
    throw new Error("<Mesh>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get position() {
    throw new Error("<Mesh>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set position(value) {
    throw new Error("<Mesh>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get rotation() {
    throw new Error("<Mesh>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set rotation(value) {
    throw new Error("<Mesh>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get scale() {
    throw new Error("<Mesh>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set scale(value) {
    throw new Error("<Mesh>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get castShadow() {
    throw new Error("<Mesh>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set castShadow(value) {
    throw new Error("<Mesh>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get receiveShadow() {
    throw new Error("<Mesh>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set receiveShadow(value) {
    throw new Error("<Mesh>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get frustumCulled() {
    throw new Error("<Mesh>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set frustumCulled(value) {
    throw new Error("<Mesh>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get renderOrder() {
    throw new Error("<Mesh>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set renderOrder(value) {
    throw new Error("<Mesh>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
};
var Mesh_default = Mesh2;

// node_modules/.deno/svelte-cubed@0.2.1/node_modules/svelte-cubed/components/objects/Skeleton.svelte
var { Error: Error_1 } = globals;
function create_fragment5(ctx) {
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[1].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[0],
    null
  );
  const block = {
    c: function create() {
      if (default_slot)
        default_slot.c();
    },
    l: function claim(nodes) {
      throw new Error_1("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        1)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[0],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[0]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[0],
              dirty,
              null
            ),
            null
          );
        }
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (default_slot)
        default_slot.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment5.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function find_bones(object, bones = []) {
  object.children.forEach((child) => {
    if (
      /** @type {THREE.Bone} */
      child.type === "Bone"
    ) {
      bones.push(
        /** @type {THREE.Bone} */
        child
      );
    }
    find_bones(child, bones);
  });
  return bones;
}
function instance5($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Skeleton", slots, ["default"]);
  const { parent } = setup();
  const mesh = (
    /** @type {THREE.SkinnedMesh} */
    parent
  );
  if (!mesh.isSkinnedMesh) {
    throw new Error("<Skeleton> must be a direct child of a <SkinnedMesh>");
  }
  onMount(() => {
    const bones = find_bones(parent);
    const skeleton = new Skeleton(bones);
    mesh.bind(skeleton);
    return () => skeleton.dispose();
  });
  const writable_props = [];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Skeleton> was created with unknown prop '${key}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2)
      $$invalidate(0, $$scope = $$props2.$$scope);
  };
  $$self.$capture_state = () => ({
    setContext,
    onMount,
    THREE: three_module_exports,
    setup,
    parent,
    mesh,
    find_bones
  });
  return [$$scope, slots];
}
var Skeleton2 = class extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance5, create_fragment5, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Skeleton",
      options,
      id: create_fragment5.name
    });
  }
};
var Skeleton_default = Skeleton2;

// node_modules/.deno/svelte-cubed@0.2.1/node_modules/svelte-cubed/components/objects/SkinnedMesh.svelte
function create_fragment6(ctx) {
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[12].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[11],
    null
  );
  const block = {
    c: function create() {
      if (default_slot)
        default_slot.c();
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        2048)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[11],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[11]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[11],
              dirty,
              null
            ),
            null
          );
        }
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (default_slot)
        default_slot.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment6.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance6($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("SkinnedMesh", slots, ["default"]);
  let { geometry: geometry2 } = $$props;
  let { material: material2 = material } = $$props;
  let { position: position2 = position } = $$props;
  let { rotation: rotation2 = rotation } = $$props;
  let { scale: scale2 = scale } = $$props;
  let { castShadow = false } = $$props;
  let { receiveShadow = false } = $$props;
  let { frustumCulled = true } = $$props;
  let { renderOrder = 0 } = $$props;
  let { bindMode = "attached" } = $$props;
  const { root, self } = setup(new SkinnedMesh(geometry2, material2));
  $$self.$$.on_mount.push(function() {
    if (geometry2 === void 0 && !("geometry" in $$props || $$self.$$.bound[$$self.$$.props["geometry"]])) {
      console.warn("<SkinnedMesh> was created without expected prop 'geometry'");
    }
  });
  const writable_props = [
    "geometry",
    "material",
    "position",
    "rotation",
    "scale",
    "castShadow",
    "receiveShadow",
    "frustumCulled",
    "renderOrder",
    "bindMode"
  ];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<SkinnedMesh> was created with unknown prop '${key}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("geometry" in $$props2)
      $$invalidate(0, geometry2 = $$props2.geometry);
    if ("material" in $$props2)
      $$invalidate(1, material2 = $$props2.material);
    if ("position" in $$props2)
      $$invalidate(2, position2 = $$props2.position);
    if ("rotation" in $$props2)
      $$invalidate(3, rotation2 = $$props2.rotation);
    if ("scale" in $$props2)
      $$invalidate(4, scale2 = $$props2.scale);
    if ("castShadow" in $$props2)
      $$invalidate(5, castShadow = $$props2.castShadow);
    if ("receiveShadow" in $$props2)
      $$invalidate(6, receiveShadow = $$props2.receiveShadow);
    if ("frustumCulled" in $$props2)
      $$invalidate(7, frustumCulled = $$props2.frustumCulled);
    if ("renderOrder" in $$props2)
      $$invalidate(8, renderOrder = $$props2.renderOrder);
    if ("bindMode" in $$props2)
      $$invalidate(9, bindMode = $$props2.bindMode);
    if ("$$scope" in $$props2)
      $$invalidate(11, $$scope = $$props2.$$scope);
  };
  $$self.$capture_state = () => ({
    THREE: three_module_exports,
    setup,
    transform,
    defaults: defaults_exports,
    geometry: geometry2,
    material: material2,
    position: position2,
    rotation: rotation2,
    scale: scale2,
    castShadow,
    receiveShadow,
    frustumCulled,
    renderOrder,
    bindMode,
    root,
    self
  });
  $$self.$inject_state = ($$props2) => {
    if ("geometry" in $$props2)
      $$invalidate(0, geometry2 = $$props2.geometry);
    if ("material" in $$props2)
      $$invalidate(1, material2 = $$props2.material);
    if ("position" in $$props2)
      $$invalidate(2, position2 = $$props2.position);
    if ("rotation" in $$props2)
      $$invalidate(3, rotation2 = $$props2.rotation);
    if ("scale" in $$props2)
      $$invalidate(4, scale2 = $$props2.scale);
    if ("castShadow" in $$props2)
      $$invalidate(5, castShadow = $$props2.castShadow);
    if ("receiveShadow" in $$props2)
      $$invalidate(6, receiveShadow = $$props2.receiveShadow);
    if ("frustumCulled" in $$props2)
      $$invalidate(7, frustumCulled = $$props2.frustumCulled);
    if ("renderOrder" in $$props2)
      $$invalidate(8, renderOrder = $$props2.renderOrder);
    if ("bindMode" in $$props2)
      $$invalidate(9, bindMode = $$props2.bindMode);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*self, geometry, material, castShadow, receiveShadow, frustumCulled, renderOrder, bindMode, position, rotation, scale*/
    2047) {
      $: {
        if (self.geometry && geometry2 !== self.geometry) {
          self.geometry.dispose();
        }
        $$invalidate(10, self.geometry = geometry2, self);
        $$invalidate(10, self.material = material2, self);
        $$invalidate(10, self.castShadow = castShadow, self);
        $$invalidate(10, self.receiveShadow = receiveShadow, self);
        $$invalidate(10, self.frustumCulled = frustumCulled, self);
        $$invalidate(10, self.renderOrder = renderOrder, self);
        $$invalidate(10, self.bindMode = bindMode, self);
        transform(self, position2, rotation2, scale2);
        root.invalidate();
      }
    }
  };
  return [
    geometry2,
    material2,
    position2,
    rotation2,
    scale2,
    castShadow,
    receiveShadow,
    frustumCulled,
    renderOrder,
    bindMode,
    self,
    $$scope,
    slots
  ];
}
var SkinnedMesh2 = class extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance6, create_fragment6, safe_not_equal, {
      geometry: 0,
      material: 1,
      position: 2,
      rotation: 3,
      scale: 4,
      castShadow: 5,
      receiveShadow: 6,
      frustumCulled: 7,
      renderOrder: 8,
      bindMode: 9
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "SkinnedMesh",
      options,
      id: create_fragment6.name
    });
  }
  get geometry() {
    throw new Error("<SkinnedMesh>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set geometry(value) {
    throw new Error("<SkinnedMesh>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get material() {
    throw new Error("<SkinnedMesh>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set material(value) {
    throw new Error("<SkinnedMesh>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get position() {
    throw new Error("<SkinnedMesh>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set position(value) {
    throw new Error("<SkinnedMesh>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get rotation() {
    throw new Error("<SkinnedMesh>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set rotation(value) {
    throw new Error("<SkinnedMesh>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get scale() {
    throw new Error("<SkinnedMesh>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set scale(value) {
    throw new Error("<SkinnedMesh>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get castShadow() {
    throw new Error("<SkinnedMesh>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set castShadow(value) {
    throw new Error("<SkinnedMesh>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get receiveShadow() {
    throw new Error("<SkinnedMesh>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set receiveShadow(value) {
    throw new Error("<SkinnedMesh>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get frustumCulled() {
    throw new Error("<SkinnedMesh>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set frustumCulled(value) {
    throw new Error("<SkinnedMesh>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get renderOrder() {
    throw new Error("<SkinnedMesh>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set renderOrder(value) {
    throw new Error("<SkinnedMesh>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get bindMode() {
    throw new Error("<SkinnedMesh>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set bindMode(value) {
    throw new Error("<SkinnedMesh>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
};
var SkinnedMesh_default = SkinnedMesh2;

// node_modules/.deno/svelte-cubed@0.2.1/node_modules/svelte-cubed/components/objects/Primitive.svelte
function create_if_block2(ctx) {
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[6].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[5],
    null
  );
  const block = {
    c: function create() {
      if (default_slot)
        default_slot.c();
    },
    m: function mount(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p: function update(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        32)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[5],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[5]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[5],
              dirty,
              null
            ),
            null
          );
        }
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (default_slot)
        default_slot.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block2.name,
    type: "if",
    source: "(38:0) {#if object}",
    ctx
  });
  return block;
}
function create_fragment7(ctx) {
  let if_block_anchor;
  let current;
  let if_block = (
    /*object*/
    ctx[0] && create_if_block2(ctx)
  );
  const block = {
    c: function create() {
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert_dev(target, if_block_anchor, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      if (
        /*object*/
        ctx2[0]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & /*object*/
          1) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block2(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach_dev(if_block_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment7.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance7($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Primitive", slots, ["default"]);
  let { object } = $$props;
  let { position: position2 = position } = $$props;
  let { rotation: rotation2 = rotation } = $$props;
  let { scale: scale2 = scale } = $$props;
  const { root, self } = setup(new Object3D());
  let previous;
  $$self.$$.on_mount.push(function() {
    if (object === void 0 && !("object" in $$props || $$self.$$.bound[$$self.$$.props["object"]])) {
      console.warn("<Primitive> was created without expected prop 'object'");
    }
  });
  const writable_props = ["object", "position", "rotation", "scale"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Primitive> was created with unknown prop '${key}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("object" in $$props2)
      $$invalidate(0, object = $$props2.object);
    if ("position" in $$props2)
      $$invalidate(1, position2 = $$props2.position);
    if ("rotation" in $$props2)
      $$invalidate(2, rotation2 = $$props2.rotation);
    if ("scale" in $$props2)
      $$invalidate(3, scale2 = $$props2.scale);
    if ("$$scope" in $$props2)
      $$invalidate(5, $$scope = $$props2.$$scope);
  };
  $$self.$capture_state = () => ({
    THREE: three_module_exports,
    setup,
    transform,
    defaults: defaults_exports,
    object,
    position: position2,
    rotation: rotation2,
    scale: scale2,
    root,
    self,
    previous
  });
  $$self.$inject_state = ($$props2) => {
    if ("object" in $$props2)
      $$invalidate(0, object = $$props2.object);
    if ("position" in $$props2)
      $$invalidate(1, position2 = $$props2.position);
    if ("rotation" in $$props2)
      $$invalidate(2, rotation2 = $$props2.rotation);
    if ("scale" in $$props2)
      $$invalidate(3, scale2 = $$props2.scale);
    if ("previous" in $$props2)
      $$invalidate(4, previous = $$props2.previous);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*previous, object*/
    17) {
      $: {
        if (previous) {
          self.remove(previous);
        }
        if (object) {
          self.add(object);
        }
        $$invalidate(4, previous = object);
        root.invalidate();
      }
    }
    if ($$self.$$.dirty & /*position, rotation, scale*/
    14) {
      $: {
        transform(self, position2, rotation2, scale2);
        root.invalidate();
      }
    }
  };
  return [object, position2, rotation2, scale2, previous, $$scope, slots];
}
var Primitive = class extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance7, create_fragment7, safe_not_equal, {
      object: 0,
      position: 1,
      rotation: 2,
      scale: 3
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Primitive",
      options,
      id: create_fragment7.name
    });
  }
  get object() {
    throw new Error("<Primitive>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set object(value) {
    throw new Error("<Primitive>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get position() {
    throw new Error("<Primitive>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set position(value) {
    throw new Error("<Primitive>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get rotation() {
    throw new Error("<Primitive>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set rotation(value) {
    throw new Error("<Primitive>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get scale() {
    throw new Error("<Primitive>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set scale(value) {
    throw new Error("<Primitive>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
};
var Primitive_default = Primitive;

// node_modules/.deno/svelte-cubed@0.2.1/node_modules/svelte-cubed/components/cameras/PerspectiveCamera.svelte
function create_fragment8(ctx) {
  const block = {
    c: noop,
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: noop,
    p: noop,
    i: noop,
    o: noop,
    d: noop
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment8.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance8($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("PerspectiveCamera", slots, []);
  let { fov = 45 } = $$props;
  let { near = 0.1 } = $$props;
  let { far = 2e3 } = $$props;
  let { zoom = 1 } = $$props;
  let { viewOffset = void 0 } = $$props;
  let { position: position2 = [0, 0, 5] } = $$props;
  let { target = [0, 0, 0] } = $$props;
  const { root, self } = setup(new PerspectiveCamera());
  const target_vector = new Vector3();
  root.camera.set(self, (w, h) => {
    $$invalidate(7, self.aspect = w / h, self);
    self.updateProjectionMatrix();
  });
  const writable_props = ["fov", "near", "far", "zoom", "viewOffset", "position", "target"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<PerspectiveCamera> was created with unknown prop '${key}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("fov" in $$props2)
      $$invalidate(0, fov = $$props2.fov);
    if ("near" in $$props2)
      $$invalidate(1, near = $$props2.near);
    if ("far" in $$props2)
      $$invalidate(2, far = $$props2.far);
    if ("zoom" in $$props2)
      $$invalidate(3, zoom = $$props2.zoom);
    if ("viewOffset" in $$props2)
      $$invalidate(4, viewOffset = $$props2.viewOffset);
    if ("position" in $$props2)
      $$invalidate(5, position2 = $$props2.position);
    if ("target" in $$props2)
      $$invalidate(6, target = $$props2.target);
  };
  $$self.$capture_state = () => ({
    setup,
    PerspectiveCamera,
    Vector3,
    fov,
    near,
    far,
    zoom,
    viewOffset,
    position: position2,
    target,
    root,
    self,
    target_vector
  });
  $$self.$inject_state = ($$props2) => {
    if ("fov" in $$props2)
      $$invalidate(0, fov = $$props2.fov);
    if ("near" in $$props2)
      $$invalidate(1, near = $$props2.near);
    if ("far" in $$props2)
      $$invalidate(2, far = $$props2.far);
    if ("zoom" in $$props2)
      $$invalidate(3, zoom = $$props2.zoom);
    if ("viewOffset" in $$props2)
      $$invalidate(4, viewOffset = $$props2.viewOffset);
    if ("position" in $$props2)
      $$invalidate(5, position2 = $$props2.position);
    if ("target" in $$props2)
      $$invalidate(6, target = $$props2.target);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*fov, near, far, zoom, viewOffset, self, position, target*/
    255) {
      $: {
        $$invalidate(7, self.fov = fov, self);
        $$invalidate(7, self.near = near, self);
        $$invalidate(7, self.far = far, self);
        $$invalidate(7, self.zoom = zoom, self);
        if (viewOffset) {
          self.setViewOffset(viewOffset.fullWidth, viewOffset.fullHeight, viewOffset.x, viewOffset.y, viewOffset.width, viewOffset.height);
        }
        self.position.set(position2[0], position2[1], position2[2]);
        target_vector.set(target[0], target[1], target[2]);
        self.lookAt(target_vector);
        self.updateProjectionMatrix();
        root.invalidate();
      }
    }
  };
  return [fov, near, far, zoom, viewOffset, position2, target, self];
}
var PerspectiveCamera_1 = class extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance8, create_fragment8, safe_not_equal, {
      fov: 0,
      near: 1,
      far: 2,
      zoom: 3,
      viewOffset: 4,
      position: 5,
      target: 6
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "PerspectiveCamera_1",
      options,
      id: create_fragment8.name
    });
  }
  get fov() {
    throw new Error("<PerspectiveCamera>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set fov(value) {
    throw new Error("<PerspectiveCamera>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get near() {
    throw new Error("<PerspectiveCamera>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set near(value) {
    throw new Error("<PerspectiveCamera>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get far() {
    throw new Error("<PerspectiveCamera>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set far(value) {
    throw new Error("<PerspectiveCamera>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get zoom() {
    throw new Error("<PerspectiveCamera>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set zoom(value) {
    throw new Error("<PerspectiveCamera>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get viewOffset() {
    throw new Error("<PerspectiveCamera>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set viewOffset(value) {
    throw new Error("<PerspectiveCamera>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get position() {
    throw new Error("<PerspectiveCamera>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set position(value) {
    throw new Error("<PerspectiveCamera>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get target() {
    throw new Error("<PerspectiveCamera>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set target(value) {
    throw new Error("<PerspectiveCamera>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
};
var PerspectiveCamera_default = PerspectiveCamera_1;

// node_modules/.deno/svelte-cubed@0.2.1/node_modules/svelte-cubed/components/cameras/OrthographicCamera.svelte
function create_fragment9(ctx) {
  const block = {
    c: noop,
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: noop,
    p: noop,
    i: noop,
    o: noop,
    d: noop
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment9.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance9($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("OrthographicCamera", slots, []);
  let { left = -1 } = $$props;
  let { right = 1 } = $$props;
  let { top = 1 } = $$props;
  let { bottom = -1 } = $$props;
  let { near = 0.1 } = $$props;
  let { far = 2e3 } = $$props;
  let { zoom = 1 } = $$props;
  let { position: position2 = [0, 0, 5] } = $$props;
  let { target = [0, 0, 0] } = $$props;
  const { root, self } = setup(new OrthographicCamera(left, right, top, bottom, near, far));
  const target_vector = new Vector3();
  root.camera.set(self, (w, h) => {
  });
  const writable_props = ["left", "right", "top", "bottom", "near", "far", "zoom", "position", "target"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<OrthographicCamera> was created with unknown prop '${key}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("left" in $$props2)
      $$invalidate(0, left = $$props2.left);
    if ("right" in $$props2)
      $$invalidate(1, right = $$props2.right);
    if ("top" in $$props2)
      $$invalidate(2, top = $$props2.top);
    if ("bottom" in $$props2)
      $$invalidate(3, bottom = $$props2.bottom);
    if ("near" in $$props2)
      $$invalidate(4, near = $$props2.near);
    if ("far" in $$props2)
      $$invalidate(5, far = $$props2.far);
    if ("zoom" in $$props2)
      $$invalidate(6, zoom = $$props2.zoom);
    if ("position" in $$props2)
      $$invalidate(7, position2 = $$props2.position);
    if ("target" in $$props2)
      $$invalidate(8, target = $$props2.target);
  };
  $$self.$capture_state = () => ({
    setup,
    OrthographicCamera,
    Vector3,
    left,
    right,
    top,
    bottom,
    near,
    far,
    zoom,
    position: position2,
    target,
    root,
    self,
    target_vector
  });
  $$self.$inject_state = ($$props2) => {
    if ("left" in $$props2)
      $$invalidate(0, left = $$props2.left);
    if ("right" in $$props2)
      $$invalidate(1, right = $$props2.right);
    if ("top" in $$props2)
      $$invalidate(2, top = $$props2.top);
    if ("bottom" in $$props2)
      $$invalidate(3, bottom = $$props2.bottom);
    if ("near" in $$props2)
      $$invalidate(4, near = $$props2.near);
    if ("far" in $$props2)
      $$invalidate(5, far = $$props2.far);
    if ("zoom" in $$props2)
      $$invalidate(6, zoom = $$props2.zoom);
    if ("position" in $$props2)
      $$invalidate(7, position2 = $$props2.position);
    if ("target" in $$props2)
      $$invalidate(8, target = $$props2.target);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*left, right, top, bottom, near, far, zoom, self, position, target*/
    1023) {
      $: {
        $$invalidate(9, self.left = left, self);
        $$invalidate(9, self.right = right, self);
        $$invalidate(9, self.top = top, self);
        $$invalidate(9, self.bottom = bottom, self);
        $$invalidate(9, self.near = near, self);
        $$invalidate(9, self.far = far, self);
        $$invalidate(9, self.zoom = zoom, self);
        self.position.set(position2[0], position2[1], position2[2]);
        target_vector.set(target[0], target[1], target[2]);
        self.lookAt(target_vector);
        self.updateProjectionMatrix();
        root.invalidate();
      }
    }
  };
  return [left, right, top, bottom, near, far, zoom, position2, target, self];
}
var OrthographicCamera_1 = class extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance9, create_fragment9, safe_not_equal, {
      left: 0,
      right: 1,
      top: 2,
      bottom: 3,
      near: 4,
      far: 5,
      zoom: 6,
      position: 7,
      target: 8
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "OrthographicCamera_1",
      options,
      id: create_fragment9.name
    });
  }
  get left() {
    throw new Error("<OrthographicCamera>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set left(value) {
    throw new Error("<OrthographicCamera>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get right() {
    throw new Error("<OrthographicCamera>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set right(value) {
    throw new Error("<OrthographicCamera>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get top() {
    throw new Error("<OrthographicCamera>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set top(value) {
    throw new Error("<OrthographicCamera>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get bottom() {
    throw new Error("<OrthographicCamera>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set bottom(value) {
    throw new Error("<OrthographicCamera>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get near() {
    throw new Error("<OrthographicCamera>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set near(value) {
    throw new Error("<OrthographicCamera>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get far() {
    throw new Error("<OrthographicCamera>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set far(value) {
    throw new Error("<OrthographicCamera>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get zoom() {
    throw new Error("<OrthographicCamera>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set zoom(value) {
    throw new Error("<OrthographicCamera>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get position() {
    throw new Error("<OrthographicCamera>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set position(value) {
    throw new Error("<OrthographicCamera>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get target() {
    throw new Error("<OrthographicCamera>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set target(value) {
    throw new Error("<OrthographicCamera>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
};
var OrthographicCamera_default = OrthographicCamera_1;

// node_modules/.deno/three@0.153.0/node_modules/three/examples/jsm/controls/OrbitControls.js
var _changeEvent = { type: "change" };
var _startEvent = { type: "start" };
var _endEvent = { type: "end" };
var OrbitControls = class extends EventDispatcher {
  constructor(object, domElement) {
    super();
    this.object = object;
    this.domElement = domElement;
    this.domElement.style.touchAction = "none";
    this.enabled = true;
    this.target = new Vector3();
    this.minDistance = 0;
    this.maxDistance = Infinity;
    this.minZoom = 0;
    this.maxZoom = Infinity;
    this.minPolarAngle = 0;
    this.maxPolarAngle = Math.PI;
    this.minAzimuthAngle = -Infinity;
    this.maxAzimuthAngle = Infinity;
    this.enableDamping = false;
    this.dampingFactor = 0.05;
    this.enableZoom = true;
    this.zoomSpeed = 1;
    this.enableRotate = true;
    this.rotateSpeed = 1;
    this.enablePan = true;
    this.panSpeed = 1;
    this.screenSpacePanning = true;
    this.keyPanSpeed = 7;
    this.autoRotate = false;
    this.autoRotateSpeed = 2;
    this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" };
    this.mouseButtons = { LEFT: MOUSE.ROTATE, MIDDLE: MOUSE.DOLLY, RIGHT: MOUSE.PAN };
    this.touches = { ONE: TOUCH.ROTATE, TWO: TOUCH.DOLLY_PAN };
    this.target0 = this.target.clone();
    this.position0 = this.object.position.clone();
    this.zoom0 = this.object.zoom;
    this._domElementKeyEvents = null;
    this.getPolarAngle = function() {
      return spherical.phi;
    };
    this.getAzimuthalAngle = function() {
      return spherical.theta;
    };
    this.getDistance = function() {
      return this.object.position.distanceTo(this.target);
    };
    this.listenToKeyEvents = function(domElement2) {
      domElement2.addEventListener("keydown", onKeyDown);
      this._domElementKeyEvents = domElement2;
    };
    this.stopListenToKeyEvents = function() {
      this._domElementKeyEvents.removeEventListener("keydown", onKeyDown);
      this._domElementKeyEvents = null;
    };
    this.saveState = function() {
      scope.target0.copy(scope.target);
      scope.position0.copy(scope.object.position);
      scope.zoom0 = scope.object.zoom;
    };
    this.reset = function() {
      scope.target.copy(scope.target0);
      scope.object.position.copy(scope.position0);
      scope.object.zoom = scope.zoom0;
      scope.object.updateProjectionMatrix();
      scope.dispatchEvent(_changeEvent);
      scope.update();
      state = STATE.NONE;
    };
    this.update = function() {
      const offset = new Vector3();
      const quat = new Quaternion().setFromUnitVectors(object.up, new Vector3(0, 1, 0));
      const quatInverse = quat.clone().invert();
      const lastPosition = new Vector3();
      const lastQuaternion = new Quaternion();
      const lastTargetPosition = new Vector3();
      const twoPI = 2 * Math.PI;
      return function update() {
        const position2 = scope.object.position;
        offset.copy(position2).sub(scope.target);
        offset.applyQuaternion(quat);
        spherical.setFromVector3(offset);
        if (scope.autoRotate && state === STATE.NONE) {
          rotateLeft(getAutoRotationAngle());
        }
        if (scope.enableDamping) {
          spherical.theta += sphericalDelta.theta * scope.dampingFactor;
          spherical.phi += sphericalDelta.phi * scope.dampingFactor;
        } else {
          spherical.theta += sphericalDelta.theta;
          spherical.phi += sphericalDelta.phi;
        }
        let min = scope.minAzimuthAngle;
        let max = scope.maxAzimuthAngle;
        if (isFinite(min) && isFinite(max)) {
          if (min < -Math.PI)
            min += twoPI;
          else if (min > Math.PI)
            min -= twoPI;
          if (max < -Math.PI)
            max += twoPI;
          else if (max > Math.PI)
            max -= twoPI;
          if (min <= max) {
            spherical.theta = Math.max(min, Math.min(max, spherical.theta));
          } else {
            spherical.theta = spherical.theta > (min + max) / 2 ? Math.max(min, spherical.theta) : Math.min(max, spherical.theta);
          }
        }
        spherical.phi = Math.max(scope.minPolarAngle, Math.min(scope.maxPolarAngle, spherical.phi));
        spherical.makeSafe();
        spherical.radius *= scale2;
        spherical.radius = Math.max(scope.minDistance, Math.min(scope.maxDistance, spherical.radius));
        if (scope.enableDamping === true) {
          scope.target.addScaledVector(panOffset, scope.dampingFactor);
        } else {
          scope.target.add(panOffset);
        }
        offset.setFromSpherical(spherical);
        offset.applyQuaternion(quatInverse);
        position2.copy(scope.target).add(offset);
        scope.object.lookAt(scope.target);
        if (scope.enableDamping === true) {
          sphericalDelta.theta *= 1 - scope.dampingFactor;
          sphericalDelta.phi *= 1 - scope.dampingFactor;
          panOffset.multiplyScalar(1 - scope.dampingFactor);
        } else {
          sphericalDelta.set(0, 0, 0);
          panOffset.set(0, 0, 0);
        }
        scale2 = 1;
        if (zoomChanged || lastPosition.distanceToSquared(scope.object.position) > EPS || 8 * (1 - lastQuaternion.dot(scope.object.quaternion)) > EPS || lastTargetPosition.distanceToSquared(scope.target) > 0) {
          scope.dispatchEvent(_changeEvent);
          lastPosition.copy(scope.object.position);
          lastQuaternion.copy(scope.object.quaternion);
          lastTargetPosition.copy(scope.target);
          zoomChanged = false;
          return true;
        }
        return false;
      };
    }();
    this.dispose = function() {
      scope.domElement.removeEventListener("contextmenu", onContextMenu);
      scope.domElement.removeEventListener("pointerdown", onPointerDown);
      scope.domElement.removeEventListener("pointercancel", onPointerUp);
      scope.domElement.removeEventListener("wheel", onMouseWheel);
      scope.domElement.removeEventListener("pointermove", onPointerMove);
      scope.domElement.removeEventListener("pointerup", onPointerUp);
      if (scope._domElementKeyEvents !== null) {
        scope._domElementKeyEvents.removeEventListener("keydown", onKeyDown);
        scope._domElementKeyEvents = null;
      }
    };
    const scope = this;
    const STATE = {
      NONE: -1,
      ROTATE: 0,
      DOLLY: 1,
      PAN: 2,
      TOUCH_ROTATE: 3,
      TOUCH_PAN: 4,
      TOUCH_DOLLY_PAN: 5,
      TOUCH_DOLLY_ROTATE: 6
    };
    let state = STATE.NONE;
    const EPS = 1e-6;
    const spherical = new Spherical();
    const sphericalDelta = new Spherical();
    let scale2 = 1;
    const panOffset = new Vector3();
    let zoomChanged = false;
    const rotateStart = new Vector2();
    const rotateEnd = new Vector2();
    const rotateDelta = new Vector2();
    const panStart = new Vector2();
    const panEnd = new Vector2();
    const panDelta = new Vector2();
    const dollyStart = new Vector2();
    const dollyEnd = new Vector2();
    const dollyDelta = new Vector2();
    const pointers = [];
    const pointerPositions = {};
    function getAutoRotationAngle() {
      return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;
    }
    function getZoomScale() {
      return Math.pow(0.95, scope.zoomSpeed);
    }
    function rotateLeft(angle) {
      sphericalDelta.theta -= angle;
    }
    function rotateUp(angle) {
      sphericalDelta.phi -= angle;
    }
    const panLeft = function() {
      const v = new Vector3();
      return function panLeft2(distance, objectMatrix) {
        v.setFromMatrixColumn(objectMatrix, 0);
        v.multiplyScalar(-distance);
        panOffset.add(v);
      };
    }();
    const panUp = function() {
      const v = new Vector3();
      return function panUp2(distance, objectMatrix) {
        if (scope.screenSpacePanning === true) {
          v.setFromMatrixColumn(objectMatrix, 1);
        } else {
          v.setFromMatrixColumn(objectMatrix, 0);
          v.crossVectors(scope.object.up, v);
        }
        v.multiplyScalar(distance);
        panOffset.add(v);
      };
    }();
    const pan = function() {
      const offset = new Vector3();
      return function pan2(deltaX, deltaY) {
        const element2 = scope.domElement;
        if (scope.object.isPerspectiveCamera) {
          const position2 = scope.object.position;
          offset.copy(position2).sub(scope.target);
          let targetDistance = offset.length();
          targetDistance *= Math.tan(scope.object.fov / 2 * Math.PI / 180);
          panLeft(2 * deltaX * targetDistance / element2.clientHeight, scope.object.matrix);
          panUp(2 * deltaY * targetDistance / element2.clientHeight, scope.object.matrix);
        } else if (scope.object.isOrthographicCamera) {
          panLeft(deltaX * (scope.object.right - scope.object.left) / scope.object.zoom / element2.clientWidth, scope.object.matrix);
          panUp(deltaY * (scope.object.top - scope.object.bottom) / scope.object.zoom / element2.clientHeight, scope.object.matrix);
        } else {
          console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.");
          scope.enablePan = false;
        }
      };
    }();
    function dollyOut(dollyScale) {
      if (scope.object.isPerspectiveCamera) {
        scale2 /= dollyScale;
      } else if (scope.object.isOrthographicCamera) {
        scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom * dollyScale));
        scope.object.updateProjectionMatrix();
        zoomChanged = true;
      } else {
        console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.");
        scope.enableZoom = false;
      }
    }
    function dollyIn(dollyScale) {
      if (scope.object.isPerspectiveCamera) {
        scale2 *= dollyScale;
      } else if (scope.object.isOrthographicCamera) {
        scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom / dollyScale));
        scope.object.updateProjectionMatrix();
        zoomChanged = true;
      } else {
        console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.");
        scope.enableZoom = false;
      }
    }
    function handleMouseDownRotate(event) {
      rotateStart.set(event.clientX, event.clientY);
    }
    function handleMouseDownDolly(event) {
      dollyStart.set(event.clientX, event.clientY);
    }
    function handleMouseDownPan(event) {
      panStart.set(event.clientX, event.clientY);
    }
    function handleMouseMoveRotate(event) {
      rotateEnd.set(event.clientX, event.clientY);
      rotateDelta.subVectors(rotateEnd, rotateStart).multiplyScalar(scope.rotateSpeed);
      const element2 = scope.domElement;
      rotateLeft(2 * Math.PI * rotateDelta.x / element2.clientHeight);
      rotateUp(2 * Math.PI * rotateDelta.y / element2.clientHeight);
      rotateStart.copy(rotateEnd);
      scope.update();
    }
    function handleMouseMoveDolly(event) {
      dollyEnd.set(event.clientX, event.clientY);
      dollyDelta.subVectors(dollyEnd, dollyStart);
      if (dollyDelta.y > 0) {
        dollyOut(getZoomScale());
      } else if (dollyDelta.y < 0) {
        dollyIn(getZoomScale());
      }
      dollyStart.copy(dollyEnd);
      scope.update();
    }
    function handleMouseMovePan(event) {
      panEnd.set(event.clientX, event.clientY);
      panDelta.subVectors(panEnd, panStart).multiplyScalar(scope.panSpeed);
      pan(panDelta.x, panDelta.y);
      panStart.copy(panEnd);
      scope.update();
    }
    function handleMouseWheel(event) {
      if (event.deltaY < 0) {
        dollyIn(getZoomScale());
      } else if (event.deltaY > 0) {
        dollyOut(getZoomScale());
      }
      scope.update();
    }
    function handleKeyDown(event) {
      let needsUpdate = false;
      switch (event.code) {
        case scope.keys.UP:
          if (event.ctrlKey || event.metaKey || event.shiftKey) {
            rotateUp(2 * Math.PI * scope.rotateSpeed / scope.domElement.clientHeight);
          } else {
            pan(0, scope.keyPanSpeed);
          }
          needsUpdate = true;
          break;
        case scope.keys.BOTTOM:
          if (event.ctrlKey || event.metaKey || event.shiftKey) {
            rotateUp(-2 * Math.PI * scope.rotateSpeed / scope.domElement.clientHeight);
          } else {
            pan(0, -scope.keyPanSpeed);
          }
          needsUpdate = true;
          break;
        case scope.keys.LEFT:
          if (event.ctrlKey || event.metaKey || event.shiftKey) {
            rotateLeft(2 * Math.PI * scope.rotateSpeed / scope.domElement.clientHeight);
          } else {
            pan(scope.keyPanSpeed, 0);
          }
          needsUpdate = true;
          break;
        case scope.keys.RIGHT:
          if (event.ctrlKey || event.metaKey || event.shiftKey) {
            rotateLeft(-2 * Math.PI * scope.rotateSpeed / scope.domElement.clientHeight);
          } else {
            pan(-scope.keyPanSpeed, 0);
          }
          needsUpdate = true;
          break;
      }
      if (needsUpdate) {
        event.preventDefault();
        scope.update();
      }
    }
    function handleTouchStartRotate() {
      if (pointers.length === 1) {
        rotateStart.set(pointers[0].pageX, pointers[0].pageY);
      } else {
        const x = 0.5 * (pointers[0].pageX + pointers[1].pageX);
        const y = 0.5 * (pointers[0].pageY + pointers[1].pageY);
        rotateStart.set(x, y);
      }
    }
    function handleTouchStartPan() {
      if (pointers.length === 1) {
        panStart.set(pointers[0].pageX, pointers[0].pageY);
      } else {
        const x = 0.5 * (pointers[0].pageX + pointers[1].pageX);
        const y = 0.5 * (pointers[0].pageY + pointers[1].pageY);
        panStart.set(x, y);
      }
    }
    function handleTouchStartDolly() {
      const dx = pointers[0].pageX - pointers[1].pageX;
      const dy = pointers[0].pageY - pointers[1].pageY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      dollyStart.set(0, distance);
    }
    function handleTouchStartDollyPan() {
      if (scope.enableZoom)
        handleTouchStartDolly();
      if (scope.enablePan)
        handleTouchStartPan();
    }
    function handleTouchStartDollyRotate() {
      if (scope.enableZoom)
        handleTouchStartDolly();
      if (scope.enableRotate)
        handleTouchStartRotate();
    }
    function handleTouchMoveRotate(event) {
      if (pointers.length == 1) {
        rotateEnd.set(event.pageX, event.pageY);
      } else {
        const position2 = getSecondPointerPosition(event);
        const x = 0.5 * (event.pageX + position2.x);
        const y = 0.5 * (event.pageY + position2.y);
        rotateEnd.set(x, y);
      }
      rotateDelta.subVectors(rotateEnd, rotateStart).multiplyScalar(scope.rotateSpeed);
      const element2 = scope.domElement;
      rotateLeft(2 * Math.PI * rotateDelta.x / element2.clientHeight);
      rotateUp(2 * Math.PI * rotateDelta.y / element2.clientHeight);
      rotateStart.copy(rotateEnd);
    }
    function handleTouchMovePan(event) {
      if (pointers.length === 1) {
        panEnd.set(event.pageX, event.pageY);
      } else {
        const position2 = getSecondPointerPosition(event);
        const x = 0.5 * (event.pageX + position2.x);
        const y = 0.5 * (event.pageY + position2.y);
        panEnd.set(x, y);
      }
      panDelta.subVectors(panEnd, panStart).multiplyScalar(scope.panSpeed);
      pan(panDelta.x, panDelta.y);
      panStart.copy(panEnd);
    }
    function handleTouchMoveDolly(event) {
      const position2 = getSecondPointerPosition(event);
      const dx = event.pageX - position2.x;
      const dy = event.pageY - position2.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      dollyEnd.set(0, distance);
      dollyDelta.set(0, Math.pow(dollyEnd.y / dollyStart.y, scope.zoomSpeed));
      dollyOut(dollyDelta.y);
      dollyStart.copy(dollyEnd);
    }
    function handleTouchMoveDollyPan(event) {
      if (scope.enableZoom)
        handleTouchMoveDolly(event);
      if (scope.enablePan)
        handleTouchMovePan(event);
    }
    function handleTouchMoveDollyRotate(event) {
      if (scope.enableZoom)
        handleTouchMoveDolly(event);
      if (scope.enableRotate)
        handleTouchMoveRotate(event);
    }
    function onPointerDown(event) {
      if (scope.enabled === false)
        return;
      if (pointers.length === 0) {
        scope.domElement.setPointerCapture(event.pointerId);
        scope.domElement.addEventListener("pointermove", onPointerMove);
        scope.domElement.addEventListener("pointerup", onPointerUp);
      }
      addPointer(event);
      if (event.pointerType === "touch") {
        onTouchStart(event);
      } else {
        onMouseDown(event);
      }
    }
    function onPointerMove(event) {
      if (scope.enabled === false)
        return;
      if (event.pointerType === "touch") {
        onTouchMove(event);
      } else {
        onMouseMove(event);
      }
    }
    function onPointerUp(event) {
      removePointer(event);
      if (pointers.length === 0) {
        scope.domElement.releasePointerCapture(event.pointerId);
        scope.domElement.removeEventListener("pointermove", onPointerMove);
        scope.domElement.removeEventListener("pointerup", onPointerUp);
      }
      scope.dispatchEvent(_endEvent);
      state = STATE.NONE;
    }
    function onMouseDown(event) {
      let mouseAction;
      switch (event.button) {
        case 0:
          mouseAction = scope.mouseButtons.LEFT;
          break;
        case 1:
          mouseAction = scope.mouseButtons.MIDDLE;
          break;
        case 2:
          mouseAction = scope.mouseButtons.RIGHT;
          break;
        default:
          mouseAction = -1;
      }
      switch (mouseAction) {
        case MOUSE.DOLLY:
          if (scope.enableZoom === false)
            return;
          handleMouseDownDolly(event);
          state = STATE.DOLLY;
          break;
        case MOUSE.ROTATE:
          if (event.ctrlKey || event.metaKey || event.shiftKey) {
            if (scope.enablePan === false)
              return;
            handleMouseDownPan(event);
            state = STATE.PAN;
          } else {
            if (scope.enableRotate === false)
              return;
            handleMouseDownRotate(event);
            state = STATE.ROTATE;
          }
          break;
        case MOUSE.PAN:
          if (event.ctrlKey || event.metaKey || event.shiftKey) {
            if (scope.enableRotate === false)
              return;
            handleMouseDownRotate(event);
            state = STATE.ROTATE;
          } else {
            if (scope.enablePan === false)
              return;
            handleMouseDownPan(event);
            state = STATE.PAN;
          }
          break;
        default:
          state = STATE.NONE;
      }
      if (state !== STATE.NONE) {
        scope.dispatchEvent(_startEvent);
      }
    }
    function onMouseMove(event) {
      switch (state) {
        case STATE.ROTATE:
          if (scope.enableRotate === false)
            return;
          handleMouseMoveRotate(event);
          break;
        case STATE.DOLLY:
          if (scope.enableZoom === false)
            return;
          handleMouseMoveDolly(event);
          break;
        case STATE.PAN:
          if (scope.enablePan === false)
            return;
          handleMouseMovePan(event);
          break;
      }
    }
    function onMouseWheel(event) {
      if (scope.enabled === false || scope.enableZoom === false || state !== STATE.NONE)
        return;
      event.preventDefault();
      scope.dispatchEvent(_startEvent);
      handleMouseWheel(event);
      scope.dispatchEvent(_endEvent);
    }
    function onKeyDown(event) {
      if (scope.enabled === false || scope.enablePan === false)
        return;
      handleKeyDown(event);
    }
    function onTouchStart(event) {
      trackPointer(event);
      switch (pointers.length) {
        case 1:
          switch (scope.touches.ONE) {
            case TOUCH.ROTATE:
              if (scope.enableRotate === false)
                return;
              handleTouchStartRotate();
              state = STATE.TOUCH_ROTATE;
              break;
            case TOUCH.PAN:
              if (scope.enablePan === false)
                return;
              handleTouchStartPan();
              state = STATE.TOUCH_PAN;
              break;
            default:
              state = STATE.NONE;
          }
          break;
        case 2:
          switch (scope.touches.TWO) {
            case TOUCH.DOLLY_PAN:
              if (scope.enableZoom === false && scope.enablePan === false)
                return;
              handleTouchStartDollyPan();
              state = STATE.TOUCH_DOLLY_PAN;
              break;
            case TOUCH.DOLLY_ROTATE:
              if (scope.enableZoom === false && scope.enableRotate === false)
                return;
              handleTouchStartDollyRotate();
              state = STATE.TOUCH_DOLLY_ROTATE;
              break;
            default:
              state = STATE.NONE;
          }
          break;
        default:
          state = STATE.NONE;
      }
      if (state !== STATE.NONE) {
        scope.dispatchEvent(_startEvent);
      }
    }
    function onTouchMove(event) {
      trackPointer(event);
      switch (state) {
        case STATE.TOUCH_ROTATE:
          if (scope.enableRotate === false)
            return;
          handleTouchMoveRotate(event);
          scope.update();
          break;
        case STATE.TOUCH_PAN:
          if (scope.enablePan === false)
            return;
          handleTouchMovePan(event);
          scope.update();
          break;
        case STATE.TOUCH_DOLLY_PAN:
          if (scope.enableZoom === false && scope.enablePan === false)
            return;
          handleTouchMoveDollyPan(event);
          scope.update();
          break;
        case STATE.TOUCH_DOLLY_ROTATE:
          if (scope.enableZoom === false && scope.enableRotate === false)
            return;
          handleTouchMoveDollyRotate(event);
          scope.update();
          break;
        default:
          state = STATE.NONE;
      }
    }
    function onContextMenu(event) {
      if (scope.enabled === false)
        return;
      event.preventDefault();
    }
    function addPointer(event) {
      pointers.push(event);
    }
    function removePointer(event) {
      delete pointerPositions[event.pointerId];
      for (let i = 0; i < pointers.length; i++) {
        if (pointers[i].pointerId == event.pointerId) {
          pointers.splice(i, 1);
          return;
        }
      }
    }
    function trackPointer(event) {
      let position2 = pointerPositions[event.pointerId];
      if (position2 === void 0) {
        position2 = new Vector2();
        pointerPositions[event.pointerId] = position2;
      }
      position2.set(event.pageX, event.pageY);
    }
    function getSecondPointerPosition(event) {
      const pointer = event.pointerId === pointers[0].pointerId ? pointers[1] : pointers[0];
      return pointerPositions[pointer.pointerId];
    }
    scope.domElement.addEventListener("contextmenu", onContextMenu);
    scope.domElement.addEventListener("pointerdown", onPointerDown);
    scope.domElement.addEventListener("pointercancel", onPointerUp);
    scope.domElement.addEventListener("wheel", onMouseWheel, { passive: false });
    this.update();
  }
};

// node_modules/.deno/svelte-cubed@0.2.1/node_modules/svelte-cubed/utils/lifecycle.js
function onFrame(callback) {
  onMount(() => {
    let frame;
    requestAnimationFrame(function loop() {
      frame = requestAnimationFrame(loop);
      callback();
    });
    return () => {
      cancelAnimationFrame(frame);
    };
  });
}

// node_modules/.deno/svelte-cubed@0.2.1/node_modules/svelte-cubed/components/controls/OrbitControls.svelte
function create_fragment10(ctx) {
  const block = {
    c: noop,
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: noop,
    p: noop,
    i: noop,
    o: noop,
    d: noop
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment10.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance10($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("OrbitControls", slots, []);
  let { autoRotate = false } = $$props;
  let { autoRotateSpeed = 2 } = $$props;
  let { dampingFactor = 0.05 } = $$props;
  let { enableDamping = false } = $$props;
  let { enabled = true } = $$props;
  let { enablePan = true } = $$props;
  let { enableRotate = true } = $$props;
  let { enableZoom = true } = $$props;
  let { keyPanSpeed = 7 } = $$props;
  let { keys = {
    LEFT: "ArrowLeft",
    UP: "ArrowUp",
    RIGHT: "ArrowRight",
    BOTTOM: "ArrowDown"
  } } = $$props;
  let { maxAzimuthAngle = Infinity } = $$props;
  let { maxDistance = Infinity } = $$props;
  let { maxPolarAngle = Math.PI } = $$props;
  let { maxZoom = Infinity } = $$props;
  let { minAzimuthAngle = Infinity } = $$props;
  let { minDistance = 0 } = $$props;
  let { minPolarAngle = 0 } = $$props;
  let { minZoom = 0 } = $$props;
  let { mouseButtons = {
    LEFT: MOUSE.ROTATE,
    MIDDLE: MOUSE.DOLLY,
    RIGHT: MOUSE.PAN
  } } = $$props;
  let { panSpeed = 1 } = $$props;
  let { rotateSpeed = 1 } = $$props;
  let { screenSpacePanning = true } = $$props;
  let { touches = {
    ONE: TOUCH.ROTATE,
    TWO: TOUCH.DOLLY_PAN
  } } = $$props;
  let { zoomSpeed = 1 } = $$props;
  let { target = [0, 0, 0] } = $$props;
  const { root } = setup();
  const dispatch = createEventDispatcher();
  let controls;
  root.controls.set((camera, canvas) => {
    $$invalidate(25, controls = new OrbitControls(camera, canvas));
    controls.addEventListener("start", (e) => {
      dispatch("start", e);
    });
    controls.addEventListener("end", (e) => {
      dispatch("end", e);
    });
    controls.addEventListener("change", (e) => {
      dispatch("change", e);
      if (!target || controls.target.x !== target[0] || controls.target.y !== target[1] || controls.target.z !== target[2]) {
        $$invalidate(0, target = [controls.target.x, controls.target.y, controls.target.z]);
      }
      root.invalidate();
    });
    return controls;
  });
  onFrame(() => {
    if (controls && (autoRotate || enableDamping)) {
      controls.update();
    }
  });
  const writable_props = [
    "autoRotate",
    "autoRotateSpeed",
    "dampingFactor",
    "enableDamping",
    "enabled",
    "enablePan",
    "enableRotate",
    "enableZoom",
    "keyPanSpeed",
    "keys",
    "maxAzimuthAngle",
    "maxDistance",
    "maxPolarAngle",
    "maxZoom",
    "minAzimuthAngle",
    "minDistance",
    "minPolarAngle",
    "minZoom",
    "mouseButtons",
    "panSpeed",
    "rotateSpeed",
    "screenSpacePanning",
    "touches",
    "zoomSpeed",
    "target"
  ];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<OrbitControls> was created with unknown prop '${key}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("autoRotate" in $$props2)
      $$invalidate(1, autoRotate = $$props2.autoRotate);
    if ("autoRotateSpeed" in $$props2)
      $$invalidate(2, autoRotateSpeed = $$props2.autoRotateSpeed);
    if ("dampingFactor" in $$props2)
      $$invalidate(3, dampingFactor = $$props2.dampingFactor);
    if ("enableDamping" in $$props2)
      $$invalidate(4, enableDamping = $$props2.enableDamping);
    if ("enabled" in $$props2)
      $$invalidate(5, enabled = $$props2.enabled);
    if ("enablePan" in $$props2)
      $$invalidate(6, enablePan = $$props2.enablePan);
    if ("enableRotate" in $$props2)
      $$invalidate(7, enableRotate = $$props2.enableRotate);
    if ("enableZoom" in $$props2)
      $$invalidate(8, enableZoom = $$props2.enableZoom);
    if ("keyPanSpeed" in $$props2)
      $$invalidate(9, keyPanSpeed = $$props2.keyPanSpeed);
    if ("keys" in $$props2)
      $$invalidate(10, keys = $$props2.keys);
    if ("maxAzimuthAngle" in $$props2)
      $$invalidate(11, maxAzimuthAngle = $$props2.maxAzimuthAngle);
    if ("maxDistance" in $$props2)
      $$invalidate(12, maxDistance = $$props2.maxDistance);
    if ("maxPolarAngle" in $$props2)
      $$invalidate(13, maxPolarAngle = $$props2.maxPolarAngle);
    if ("maxZoom" in $$props2)
      $$invalidate(14, maxZoom = $$props2.maxZoom);
    if ("minAzimuthAngle" in $$props2)
      $$invalidate(15, minAzimuthAngle = $$props2.minAzimuthAngle);
    if ("minDistance" in $$props2)
      $$invalidate(16, minDistance = $$props2.minDistance);
    if ("minPolarAngle" in $$props2)
      $$invalidate(17, minPolarAngle = $$props2.minPolarAngle);
    if ("minZoom" in $$props2)
      $$invalidate(18, minZoom = $$props2.minZoom);
    if ("mouseButtons" in $$props2)
      $$invalidate(19, mouseButtons = $$props2.mouseButtons);
    if ("panSpeed" in $$props2)
      $$invalidate(20, panSpeed = $$props2.panSpeed);
    if ("rotateSpeed" in $$props2)
      $$invalidate(21, rotateSpeed = $$props2.rotateSpeed);
    if ("screenSpacePanning" in $$props2)
      $$invalidate(22, screenSpacePanning = $$props2.screenSpacePanning);
    if ("touches" in $$props2)
      $$invalidate(23, touches = $$props2.touches);
    if ("zoomSpeed" in $$props2)
      $$invalidate(24, zoomSpeed = $$props2.zoomSpeed);
    if ("target" in $$props2)
      $$invalidate(0, target = $$props2.target);
  };
  $$self.$capture_state = () => ({
    THREE: three_module_exports,
    setup,
    OrbitControls,
    createEventDispatcher,
    onFrame,
    autoRotate,
    autoRotateSpeed,
    dampingFactor,
    enableDamping,
    enabled,
    enablePan,
    enableRotate,
    enableZoom,
    keyPanSpeed,
    keys,
    maxAzimuthAngle,
    maxDistance,
    maxPolarAngle,
    maxZoom,
    minAzimuthAngle,
    minDistance,
    minPolarAngle,
    minZoom,
    mouseButtons,
    panSpeed,
    rotateSpeed,
    screenSpacePanning,
    touches,
    zoomSpeed,
    target,
    root,
    dispatch,
    controls
  });
  $$self.$inject_state = ($$props2) => {
    if ("autoRotate" in $$props2)
      $$invalidate(1, autoRotate = $$props2.autoRotate);
    if ("autoRotateSpeed" in $$props2)
      $$invalidate(2, autoRotateSpeed = $$props2.autoRotateSpeed);
    if ("dampingFactor" in $$props2)
      $$invalidate(3, dampingFactor = $$props2.dampingFactor);
    if ("enableDamping" in $$props2)
      $$invalidate(4, enableDamping = $$props2.enableDamping);
    if ("enabled" in $$props2)
      $$invalidate(5, enabled = $$props2.enabled);
    if ("enablePan" in $$props2)
      $$invalidate(6, enablePan = $$props2.enablePan);
    if ("enableRotate" in $$props2)
      $$invalidate(7, enableRotate = $$props2.enableRotate);
    if ("enableZoom" in $$props2)
      $$invalidate(8, enableZoom = $$props2.enableZoom);
    if ("keyPanSpeed" in $$props2)
      $$invalidate(9, keyPanSpeed = $$props2.keyPanSpeed);
    if ("keys" in $$props2)
      $$invalidate(10, keys = $$props2.keys);
    if ("maxAzimuthAngle" in $$props2)
      $$invalidate(11, maxAzimuthAngle = $$props2.maxAzimuthAngle);
    if ("maxDistance" in $$props2)
      $$invalidate(12, maxDistance = $$props2.maxDistance);
    if ("maxPolarAngle" in $$props2)
      $$invalidate(13, maxPolarAngle = $$props2.maxPolarAngle);
    if ("maxZoom" in $$props2)
      $$invalidate(14, maxZoom = $$props2.maxZoom);
    if ("minAzimuthAngle" in $$props2)
      $$invalidate(15, minAzimuthAngle = $$props2.minAzimuthAngle);
    if ("minDistance" in $$props2)
      $$invalidate(16, minDistance = $$props2.minDistance);
    if ("minPolarAngle" in $$props2)
      $$invalidate(17, minPolarAngle = $$props2.minPolarAngle);
    if ("minZoom" in $$props2)
      $$invalidate(18, minZoom = $$props2.minZoom);
    if ("mouseButtons" in $$props2)
      $$invalidate(19, mouseButtons = $$props2.mouseButtons);
    if ("panSpeed" in $$props2)
      $$invalidate(20, panSpeed = $$props2.panSpeed);
    if ("rotateSpeed" in $$props2)
      $$invalidate(21, rotateSpeed = $$props2.rotateSpeed);
    if ("screenSpacePanning" in $$props2)
      $$invalidate(22, screenSpacePanning = $$props2.screenSpacePanning);
    if ("touches" in $$props2)
      $$invalidate(23, touches = $$props2.touches);
    if ("zoomSpeed" in $$props2)
      $$invalidate(24, zoomSpeed = $$props2.zoomSpeed);
    if ("target" in $$props2)
      $$invalidate(0, target = $$props2.target);
    if ("controls" in $$props2)
      $$invalidate(25, controls = $$props2.controls);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*controls, autoRotate, autoRotateSpeed, dampingFactor, enableDamping, enabled, enablePan, enableRotate, enableZoom, keyPanSpeed, keys, maxAzimuthAngle, maxDistance, maxPolarAngle, maxZoom, minAzimuthAngle, minDistance, minPolarAngle, minZoom, mouseButtons, panSpeed, rotateSpeed, screenSpacePanning, touches, zoomSpeed*/
    67108862) {
      $:
        if (controls) {
          $$invalidate(25, controls.autoRotate = autoRotate, controls);
          $$invalidate(25, controls.autoRotateSpeed = autoRotateSpeed, controls);
          $$invalidate(25, controls.dampingFactor = dampingFactor, controls);
          $$invalidate(25, controls.enableDamping = enableDamping, controls);
          $$invalidate(25, controls.enabled = enabled, controls);
          $$invalidate(25, controls.enablePan = enablePan, controls);
          $$invalidate(25, controls.enableRotate = enableRotate, controls);
          $$invalidate(25, controls.enableZoom = enableZoom, controls);
          $$invalidate(25, controls.keyPanSpeed = keyPanSpeed, controls);
          $$invalidate(25, controls.keys = keys, controls);
          $$invalidate(25, controls.maxAzimuthAngle = maxAzimuthAngle, controls);
          $$invalidate(25, controls.maxDistance = maxDistance, controls);
          $$invalidate(25, controls.maxPolarAngle = maxPolarAngle, controls);
          $$invalidate(25, controls.maxZoom = maxZoom, controls);
          $$invalidate(25, controls.minAzimuthAngle = minAzimuthAngle, controls);
          $$invalidate(25, controls.minDistance = minDistance, controls);
          $$invalidate(25, controls.minPolarAngle = minPolarAngle, controls);
          $$invalidate(25, controls.minZoom = minZoom, controls);
          $$invalidate(25, controls.mouseButtons = mouseButtons, controls);
          $$invalidate(25, controls.panSpeed = panSpeed, controls);
          $$invalidate(25, controls.rotateSpeed = rotateSpeed, controls);
          $$invalidate(25, controls.screenSpacePanning = screenSpacePanning, controls);
          $$invalidate(25, controls.touches = touches, controls);
          $$invalidate(25, controls.zoomSpeed = zoomSpeed, controls);
          controls.update();
        }
    }
    if ($$self.$$.dirty & /*target, controls*/
    33554433) {
      $:
        if (target && (controls.target.x !== target[0] || controls.target.y !== target[1] || controls.target.z !== target[2])) {
          controls.target.set(target[0], target[1], target[2]);
          controls.update();
        }
    }
  };
  return [
    target,
    autoRotate,
    autoRotateSpeed,
    dampingFactor,
    enableDamping,
    enabled,
    enablePan,
    enableRotate,
    enableZoom,
    keyPanSpeed,
    keys,
    maxAzimuthAngle,
    maxDistance,
    maxPolarAngle,
    maxZoom,
    minAzimuthAngle,
    minDistance,
    minPolarAngle,
    minZoom,
    mouseButtons,
    panSpeed,
    rotateSpeed,
    screenSpacePanning,
    touches,
    zoomSpeed,
    controls
  ];
}
var OrbitControls_1 = class extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance10, create_fragment10, safe_not_equal, {
      autoRotate: 1,
      autoRotateSpeed: 2,
      dampingFactor: 3,
      enableDamping: 4,
      enabled: 5,
      enablePan: 6,
      enableRotate: 7,
      enableZoom: 8,
      keyPanSpeed: 9,
      keys: 10,
      maxAzimuthAngle: 11,
      maxDistance: 12,
      maxPolarAngle: 13,
      maxZoom: 14,
      minAzimuthAngle: 15,
      minDistance: 16,
      minPolarAngle: 17,
      minZoom: 18,
      mouseButtons: 19,
      panSpeed: 20,
      rotateSpeed: 21,
      screenSpacePanning: 22,
      touches: 23,
      zoomSpeed: 24,
      target: 0
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "OrbitControls_1",
      options,
      id: create_fragment10.name
    });
  }
  get autoRotate() {
    throw new Error("<OrbitControls>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set autoRotate(value) {
    throw new Error("<OrbitControls>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get autoRotateSpeed() {
    throw new Error("<OrbitControls>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set autoRotateSpeed(value) {
    throw new Error("<OrbitControls>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get dampingFactor() {
    throw new Error("<OrbitControls>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set dampingFactor(value) {
    throw new Error("<OrbitControls>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get enableDamping() {
    throw new Error("<OrbitControls>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set enableDamping(value) {
    throw new Error("<OrbitControls>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get enabled() {
    throw new Error("<OrbitControls>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set enabled(value) {
    throw new Error("<OrbitControls>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get enablePan() {
    throw new Error("<OrbitControls>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set enablePan(value) {
    throw new Error("<OrbitControls>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get enableRotate() {
    throw new Error("<OrbitControls>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set enableRotate(value) {
    throw new Error("<OrbitControls>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get enableZoom() {
    throw new Error("<OrbitControls>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set enableZoom(value) {
    throw new Error("<OrbitControls>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get keyPanSpeed() {
    throw new Error("<OrbitControls>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set keyPanSpeed(value) {
    throw new Error("<OrbitControls>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get keys() {
    throw new Error("<OrbitControls>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set keys(value) {
    throw new Error("<OrbitControls>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get maxAzimuthAngle() {
    throw new Error("<OrbitControls>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set maxAzimuthAngle(value) {
    throw new Error("<OrbitControls>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get maxDistance() {
    throw new Error("<OrbitControls>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set maxDistance(value) {
    throw new Error("<OrbitControls>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get maxPolarAngle() {
    throw new Error("<OrbitControls>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set maxPolarAngle(value) {
    throw new Error("<OrbitControls>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get maxZoom() {
    throw new Error("<OrbitControls>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set maxZoom(value) {
    throw new Error("<OrbitControls>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get minAzimuthAngle() {
    throw new Error("<OrbitControls>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set minAzimuthAngle(value) {
    throw new Error("<OrbitControls>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get minDistance() {
    throw new Error("<OrbitControls>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set minDistance(value) {
    throw new Error("<OrbitControls>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get minPolarAngle() {
    throw new Error("<OrbitControls>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set minPolarAngle(value) {
    throw new Error("<OrbitControls>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get minZoom() {
    throw new Error("<OrbitControls>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set minZoom(value) {
    throw new Error("<OrbitControls>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get mouseButtons() {
    throw new Error("<OrbitControls>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set mouseButtons(value) {
    throw new Error("<OrbitControls>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get panSpeed() {
    throw new Error("<OrbitControls>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set panSpeed(value) {
    throw new Error("<OrbitControls>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get rotateSpeed() {
    throw new Error("<OrbitControls>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set rotateSpeed(value) {
    throw new Error("<OrbitControls>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get screenSpacePanning() {
    throw new Error("<OrbitControls>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set screenSpacePanning(value) {
    throw new Error("<OrbitControls>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get touches() {
    throw new Error("<OrbitControls>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set touches(value) {
    throw new Error("<OrbitControls>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get zoomSpeed() {
    throw new Error("<OrbitControls>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set zoomSpeed(value) {
    throw new Error("<OrbitControls>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get target() {
    throw new Error("<OrbitControls>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set target(value) {
    throw new Error("<OrbitControls>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
};
var OrbitControls_default = OrbitControls_1;

// node_modules/.deno/svelte-cubed@0.2.1/node_modules/svelte-cubed/components/lights/AmbientLight.svelte
function create_fragment11(ctx) {
  const block = {
    c: noop,
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: noop,
    p: noop,
    i: noop,
    o: noop,
    d: noop
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment11.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance11($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("AmbientLight", slots, []);
  let { color = 16777215 } = $$props;
  let { intensity = 1 } = $$props;
  const { root, self } = setup(new AmbientLight(color, intensity));
  const writable_props = ["color", "intensity"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<AmbientLight> was created with unknown prop '${key}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("color" in $$props2)
      $$invalidate(0, color = $$props2.color);
    if ("intensity" in $$props2)
      $$invalidate(1, intensity = $$props2.intensity);
  };
  $$self.$capture_state = () => ({
    setup,
    THREE: three_module_exports,
    color,
    intensity,
    root,
    self
  });
  $$self.$inject_state = ($$props2) => {
    if ("color" in $$props2)
      $$invalidate(0, color = $$props2.color);
    if ("intensity" in $$props2)
      $$invalidate(1, intensity = $$props2.intensity);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*self, color, intensity*/
    7) {
      $: {
        self.color.set(color);
        $$invalidate(2, self.intensity = intensity, self);
        root.invalidate();
      }
    }
  };
  return [color, intensity, self];
}
var AmbientLight2 = class extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance11, create_fragment11, safe_not_equal, { color: 0, intensity: 1 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "AmbientLight",
      options,
      id: create_fragment11.name
    });
  }
  get color() {
    throw new Error("<AmbientLight>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set color(value) {
    throw new Error("<AmbientLight>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get intensity() {
    throw new Error("<AmbientLight>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set intensity(value) {
    throw new Error("<AmbientLight>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
};
var AmbientLight_default = AmbientLight2;

// node_modules/.deno/svelte-cubed@0.2.1/node_modules/svelte-cubed/components/lights/DirectionalLight.svelte
function create_fragment12(ctx) {
  const block = {
    c: noop,
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: noop,
    p: noop,
    i: noop,
    o: noop,
    d: noop
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment12.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance12($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("DirectionalLight", slots, []);
  let { color = 16777215 } = $$props;
  let { intensity = 1 } = $$props;
  let { position: position2 = [0, 1, 0] } = $$props;
  let { target = [0, 0, 0] } = $$props;
  let { shadow = null } = $$props;
  const { root, self } = setup(new DirectionalLight());
  const writable_props = ["color", "intensity", "position", "target", "shadow"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<DirectionalLight> was created with unknown prop '${key}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("color" in $$props2)
      $$invalidate(0, color = $$props2.color);
    if ("intensity" in $$props2)
      $$invalidate(1, intensity = $$props2.intensity);
    if ("position" in $$props2)
      $$invalidate(2, position2 = $$props2.position);
    if ("target" in $$props2)
      $$invalidate(3, target = $$props2.target);
    if ("shadow" in $$props2)
      $$invalidate(4, shadow = $$props2.shadow);
  };
  $$self.$capture_state = () => ({
    setup,
    THREE: three_module_exports,
    color,
    intensity,
    position: position2,
    target,
    shadow,
    root,
    self
  });
  $$self.$inject_state = ($$props2) => {
    if ("color" in $$props2)
      $$invalidate(0, color = $$props2.color);
    if ("intensity" in $$props2)
      $$invalidate(1, intensity = $$props2.intensity);
    if ("position" in $$props2)
      $$invalidate(2, position2 = $$props2.position);
    if ("target" in $$props2)
      $$invalidate(3, target = $$props2.target);
    if ("shadow" in $$props2)
      $$invalidate(4, shadow = $$props2.shadow);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*self, color, intensity, position, target*/
    47) {
      $: {
        self.color.set(color);
        $$invalidate(5, self.intensity = intensity, self);
        self.position.set(position2[0], position2[1], position2[2]);
        self.target.position.set(target[0], target[1], target[2]);
        root.invalidate();
      }
    }
    if ($$self.$$.dirty & /*shadow, self*/
    48) {
      $: {
        if (shadow) {
          const { mapSize = [512, 512], camera: { left = -5, bottom = -5, right = 5, top = 5, near = 0.5, far = 500 } = {}, bias = 0, radius = 1 } = shadow === true ? {} : shadow;
          self.shadow.mapSize.set(mapSize[0], mapSize[1]);
          $$invalidate(5, self.shadow.camera.left = left, self);
          $$invalidate(5, self.shadow.camera.top = top, self);
          $$invalidate(5, self.shadow.camera.right = right, self);
          $$invalidate(5, self.shadow.camera.bottom = bottom, self);
          $$invalidate(5, self.shadow.camera.near = near, self);
          $$invalidate(5, self.shadow.camera.far = far, self);
          $$invalidate(5, self.shadow.bias = bias, self);
          $$invalidate(5, self.shadow.radius = radius, self);
          $$invalidate(5, self.castShadow = true, self);
        } else {
          $$invalidate(5, self.castShadow = false, self);
        }
        root.invalidate();
      }
    }
  };
  return [color, intensity, position2, target, shadow, self];
}
var DirectionalLight2 = class extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance12, create_fragment12, safe_not_equal, {
      color: 0,
      intensity: 1,
      position: 2,
      target: 3,
      shadow: 4
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "DirectionalLight",
      options,
      id: create_fragment12.name
    });
  }
  get color() {
    throw new Error("<DirectionalLight>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set color(value) {
    throw new Error("<DirectionalLight>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get intensity() {
    throw new Error("<DirectionalLight>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set intensity(value) {
    throw new Error("<DirectionalLight>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get position() {
    throw new Error("<DirectionalLight>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set position(value) {
    throw new Error("<DirectionalLight>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get target() {
    throw new Error("<DirectionalLight>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set target(value) {
    throw new Error("<DirectionalLight>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get shadow() {
    throw new Error("<DirectionalLight>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set shadow(value) {
    throw new Error("<DirectionalLight>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
};
var DirectionalLight_default = DirectionalLight2;

// node_modules/.deno/svelte-cubed@0.2.1/node_modules/svelte-cubed/components/lights/HemisphereLight.svelte
function create_fragment13(ctx) {
  const block = {
    c: noop,
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: noop,
    p: noop,
    i: noop,
    o: noop,
    d: noop
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment13.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance13($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("HemisphereLight", slots, []);
  let { color = 16777215 } = $$props;
  let { groundColor = 16777215 } = $$props;
  let { intensity = 1 } = $$props;
  const { root, self } = setup(new HemisphereLight());
  const writable_props = ["color", "groundColor", "intensity"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<HemisphereLight> was created with unknown prop '${key}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("color" in $$props2)
      $$invalidate(0, color = $$props2.color);
    if ("groundColor" in $$props2)
      $$invalidate(1, groundColor = $$props2.groundColor);
    if ("intensity" in $$props2)
      $$invalidate(2, intensity = $$props2.intensity);
  };
  $$self.$capture_state = () => ({
    setup,
    THREE: three_module_exports,
    color,
    groundColor,
    intensity,
    root,
    self
  });
  $$self.$inject_state = ($$props2) => {
    if ("color" in $$props2)
      $$invalidate(0, color = $$props2.color);
    if ("groundColor" in $$props2)
      $$invalidate(1, groundColor = $$props2.groundColor);
    if ("intensity" in $$props2)
      $$invalidate(2, intensity = $$props2.intensity);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*self, color, groundColor, intensity*/
    15) {
      $: {
        self.color.set(color);
        self.groundColor.set(groundColor);
        $$invalidate(3, self.intensity = intensity, self);
        root.invalidate();
      }
    }
  };
  return [color, groundColor, intensity, self];
}
var HemisphereLight2 = class extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance13, create_fragment13, safe_not_equal, { color: 0, groundColor: 1, intensity: 2 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "HemisphereLight",
      options,
      id: create_fragment13.name
    });
  }
  get color() {
    throw new Error("<HemisphereLight>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set color(value) {
    throw new Error("<HemisphereLight>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get groundColor() {
    throw new Error("<HemisphereLight>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set groundColor(value) {
    throw new Error("<HemisphereLight>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get intensity() {
    throw new Error("<HemisphereLight>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set intensity(value) {
    throw new Error("<HemisphereLight>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
};
var HemisphereLight_default = HemisphereLight2;

// node_modules/.deno/svelte-cubed@0.2.1/node_modules/svelte-cubed/components/lights/PointLight.svelte
function create_fragment14(ctx) {
  const block = {
    c: noop,
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: noop,
    p: noop,
    i: noop,
    o: noop,
    d: noop
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment14.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance14($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("PointLight", slots, []);
  let { color = 16777215 } = $$props;
  let { intensity = 1 } = $$props;
  let { distance = 100 } = $$props;
  let { decay = 1 } = $$props;
  let { position: position2 = [0, 0, 0] } = $$props;
  let { shadow = null } = $$props;
  const { root, self } = setup(new PointLight());
  const writable_props = ["color", "intensity", "distance", "decay", "position", "shadow"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<PointLight> was created with unknown prop '${key}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("color" in $$props2)
      $$invalidate(0, color = $$props2.color);
    if ("intensity" in $$props2)
      $$invalidate(1, intensity = $$props2.intensity);
    if ("distance" in $$props2)
      $$invalidate(2, distance = $$props2.distance);
    if ("decay" in $$props2)
      $$invalidate(3, decay = $$props2.decay);
    if ("position" in $$props2)
      $$invalidate(4, position2 = $$props2.position);
    if ("shadow" in $$props2)
      $$invalidate(5, shadow = $$props2.shadow);
  };
  $$self.$capture_state = () => ({
    setup,
    THREE: three_module_exports,
    color,
    intensity,
    distance,
    decay,
    position: position2,
    shadow,
    root,
    self
  });
  $$self.$inject_state = ($$props2) => {
    if ("color" in $$props2)
      $$invalidate(0, color = $$props2.color);
    if ("intensity" in $$props2)
      $$invalidate(1, intensity = $$props2.intensity);
    if ("distance" in $$props2)
      $$invalidate(2, distance = $$props2.distance);
    if ("decay" in $$props2)
      $$invalidate(3, decay = $$props2.decay);
    if ("position" in $$props2)
      $$invalidate(4, position2 = $$props2.position);
    if ("shadow" in $$props2)
      $$invalidate(5, shadow = $$props2.shadow);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*self, color, intensity, distance, decay, position*/
    95) {
      $: {
        self.color.set(color);
        $$invalidate(6, self.intensity = intensity, self);
        $$invalidate(6, self.distance = distance, self);
        $$invalidate(6, self.decay = decay, self);
        self.position.set(position2[0], position2[1], position2[2]);
        root.invalidate();
      }
    }
    if ($$self.$$.dirty & /*shadow, self*/
    96) {
      $: {
        if (shadow) {
          const { mapSize = [512, 512], camera: { near = 0.5, far = 500 } = {}, bias = 0, radius = 1 } = shadow === true ? {} : shadow;
          self.shadow.mapSize.set(mapSize[0], mapSize[1]);
          $$invalidate(6, self.shadow.camera.near = near, self);
          $$invalidate(6, self.shadow.camera.far = far, self);
          $$invalidate(6, self.shadow.bias = bias, self);
          $$invalidate(6, self.shadow.radius = radius, self);
          $$invalidate(6, self.castShadow = true, self);
        } else {
          $$invalidate(6, self.castShadow = false, self);
        }
        root.invalidate();
      }
    }
  };
  return [color, intensity, distance, decay, position2, shadow, self];
}
var PointLight2 = class extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance14, create_fragment14, safe_not_equal, {
      color: 0,
      intensity: 1,
      distance: 2,
      decay: 3,
      position: 4,
      shadow: 5
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "PointLight",
      options,
      id: create_fragment14.name
    });
  }
  get color() {
    throw new Error("<PointLight>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set color(value) {
    throw new Error("<PointLight>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get intensity() {
    throw new Error("<PointLight>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set intensity(value) {
    throw new Error("<PointLight>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get distance() {
    throw new Error("<PointLight>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set distance(value) {
    throw new Error("<PointLight>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get decay() {
    throw new Error("<PointLight>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set decay(value) {
    throw new Error("<PointLight>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get position() {
    throw new Error("<PointLight>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set position(value) {
    throw new Error("<PointLight>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get shadow() {
    throw new Error("<PointLight>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set shadow(value) {
    throw new Error("<PointLight>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
};
var PointLight_default = PointLight2;

// node_modules/.deno/svelte-cubed@0.2.1/node_modules/svelte-cubed/components/lights/SpotLight.svelte
function create_fragment15(ctx) {
  const block = {
    c: noop,
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: noop,
    p: noop,
    i: noop,
    o: noop,
    d: noop
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment15.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance15($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("SpotLight", slots, []);
  let { color = 16777215 } = $$props;
  let { intensity = 1 } = $$props;
  let { distance = 0 } = $$props;
  let { angle = Math.PI / 3 } = $$props;
  let { penumbra = 0 } = $$props;
  let { decay = 1 } = $$props;
  let { position: position2 = [0, 0, 0] } = $$props;
  let { target = [0, 0, 0] } = $$props;
  let { shadow = null } = $$props;
  const { root, self } = setup(new SpotLight());
  const target_vector = new Vector3();
  const writable_props = [
    "color",
    "intensity",
    "distance",
    "angle",
    "penumbra",
    "decay",
    "position",
    "target",
    "shadow"
  ];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<SpotLight> was created with unknown prop '${key}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("color" in $$props2)
      $$invalidate(0, color = $$props2.color);
    if ("intensity" in $$props2)
      $$invalidate(1, intensity = $$props2.intensity);
    if ("distance" in $$props2)
      $$invalidate(2, distance = $$props2.distance);
    if ("angle" in $$props2)
      $$invalidate(3, angle = $$props2.angle);
    if ("penumbra" in $$props2)
      $$invalidate(4, penumbra = $$props2.penumbra);
    if ("decay" in $$props2)
      $$invalidate(5, decay = $$props2.decay);
    if ("position" in $$props2)
      $$invalidate(6, position2 = $$props2.position);
    if ("target" in $$props2)
      $$invalidate(7, target = $$props2.target);
    if ("shadow" in $$props2)
      $$invalidate(8, shadow = $$props2.shadow);
  };
  $$self.$capture_state = () => ({
    setup,
    THREE: three_module_exports,
    color,
    intensity,
    distance,
    angle,
    penumbra,
    decay,
    position: position2,
    target,
    shadow,
    root,
    self,
    target_vector
  });
  $$self.$inject_state = ($$props2) => {
    if ("color" in $$props2)
      $$invalidate(0, color = $$props2.color);
    if ("intensity" in $$props2)
      $$invalidate(1, intensity = $$props2.intensity);
    if ("distance" in $$props2)
      $$invalidate(2, distance = $$props2.distance);
    if ("angle" in $$props2)
      $$invalidate(3, angle = $$props2.angle);
    if ("penumbra" in $$props2)
      $$invalidate(4, penumbra = $$props2.penumbra);
    if ("decay" in $$props2)
      $$invalidate(5, decay = $$props2.decay);
    if ("position" in $$props2)
      $$invalidate(6, position2 = $$props2.position);
    if ("target" in $$props2)
      $$invalidate(7, target = $$props2.target);
    if ("shadow" in $$props2)
      $$invalidate(8, shadow = $$props2.shadow);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*self, color, intensity, distance, decay, angle, penumbra, position, target*/
    767) {
      $: {
        self.color.set(color);
        $$invalidate(9, self.intensity = intensity, self);
        $$invalidate(9, self.distance = distance, self);
        $$invalidate(9, self.decay = decay, self);
        $$invalidate(9, self.angle = angle, self);
        $$invalidate(9, self.penumbra = penumbra, self);
        self.position.set(position2[0], position2[1], position2[2]);
        target_vector.set(target[0], target[1], target[2]);
        self.lookAt(target_vector);
        root.invalidate();
      }
    }
    if ($$self.$$.dirty & /*shadow, self*/
    768) {
      $: {
        if (shadow) {
          const { mapSize = [512, 512], camera: { near = 0.5, far = 500 } = {}, bias = 0, radius = 1 } = shadow === true ? {} : shadow;
          self.shadow.mapSize.set(mapSize[0], mapSize[1]);
          $$invalidate(9, self.shadow.camera.near = near, self);
          $$invalidate(9, self.shadow.camera.far = far, self);
          $$invalidate(9, self.shadow.bias = bias, self);
          $$invalidate(9, self.shadow.radius = radius, self);
          $$invalidate(9, self.castShadow = true, self);
        } else {
          $$invalidate(9, self.castShadow = false, self);
        }
        root.invalidate();
      }
    }
  };
  return [
    color,
    intensity,
    distance,
    angle,
    penumbra,
    decay,
    position2,
    target,
    shadow,
    self
  ];
}
var SpotLight2 = class extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance15, create_fragment15, safe_not_equal, {
      color: 0,
      intensity: 1,
      distance: 2,
      angle: 3,
      penumbra: 4,
      decay: 5,
      position: 6,
      target: 7,
      shadow: 8
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "SpotLight",
      options,
      id: create_fragment15.name
    });
  }
  get color() {
    throw new Error("<SpotLight>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set color(value) {
    throw new Error("<SpotLight>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get intensity() {
    throw new Error("<SpotLight>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set intensity(value) {
    throw new Error("<SpotLight>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get distance() {
    throw new Error("<SpotLight>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set distance(value) {
    throw new Error("<SpotLight>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get angle() {
    throw new Error("<SpotLight>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set angle(value) {
    throw new Error("<SpotLight>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get penumbra() {
    throw new Error("<SpotLight>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set penumbra(value) {
    throw new Error("<SpotLight>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get decay() {
    throw new Error("<SpotLight>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set decay(value) {
    throw new Error("<SpotLight>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get position() {
    throw new Error("<SpotLight>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set position(value) {
    throw new Error("<SpotLight>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get target() {
    throw new Error("<SpotLight>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set target(value) {
    throw new Error("<SpotLight>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get shadow() {
    throw new Error("<SpotLight>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set shadow(value) {
    throw new Error("<SpotLight>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
};
var SpotLight_default = SpotLight2;

// node_modules/.deno/svelte-cubed@0.2.1/node_modules/svelte-cubed/components/animation/Animation.svelte
function create_fragment16(ctx) {
  const block = {
    c: noop,
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: noop,
    p: noop,
    i: noop,
    o: noop,
    d: noop
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment16.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance16($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Animation", slots, []);
  let { clip } = $$props;
  let { time = 0 } = $$props;
  let { timeScale = 1 } = $$props;
  let { weight = 1 } = $$props;
  const { root, parent } = setup();
  const mixer = new AnimationMixer(parent);
  let action;
  $$self.$$.on_mount.push(function() {
    if (clip === void 0 && !("clip" in $$props || $$self.$$.bound[$$self.$$.props["clip"]])) {
      console.warn("<Animation> was created without expected prop 'clip'");
    }
  });
  const writable_props = ["clip", "time", "timeScale", "weight"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Animation> was created with unknown prop '${key}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("clip" in $$props2)
      $$invalidate(0, clip = $$props2.clip);
    if ("time" in $$props2)
      $$invalidate(1, time = $$props2.time);
    if ("timeScale" in $$props2)
      $$invalidate(2, timeScale = $$props2.timeScale);
    if ("weight" in $$props2)
      $$invalidate(3, weight = $$props2.weight);
  };
  $$self.$capture_state = () => ({
    THREE: three_module_exports,
    setup,
    clip,
    time,
    timeScale,
    weight,
    root,
    parent,
    mixer,
    action
  });
  $$self.$inject_state = ($$props2) => {
    if ("clip" in $$props2)
      $$invalidate(0, clip = $$props2.clip);
    if ("time" in $$props2)
      $$invalidate(1, time = $$props2.time);
    if ("timeScale" in $$props2)
      $$invalidate(2, timeScale = $$props2.timeScale);
    if ("weight" in $$props2)
      $$invalidate(3, weight = $$props2.weight);
    if ("action" in $$props2)
      $$invalidate(5, action = $$props2.action);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*weight, timeScale, mixer, time*/
    30) {
      $: {
        $$invalidate(5, action.weight = weight, action);
        $$invalidate(4, mixer.timeScale = timeScale, mixer);
        mixer.setTime(time);
        root.invalidate();
      }
    }
    if ($$self.$$.dirty & /*mixer, clip, action*/
    49) {
      $: {
        $$invalidate(5, action = mixer.clipAction(clip));
        action.play();
      }
    }
  };
  return [clip, time, timeScale, weight, mixer, action];
}
var Animation = class extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance16, create_fragment16, safe_not_equal, {
      clip: 0,
      time: 1,
      timeScale: 2,
      weight: 3
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Animation",
      options,
      id: create_fragment16.name
    });
  }
  get clip() {
    throw new Error("<Animation>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set clip(value) {
    throw new Error("<Animation>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get time() {
    throw new Error("<Animation>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set time(value) {
    throw new Error("<Animation>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get timeScale() {
    throw new Error("<Animation>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set timeScale(value) {
    throw new Error("<Animation>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get weight() {
    throw new Error("<Animation>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set weight(value) {
    throw new Error("<Animation>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
};
var Animation_default = Animation;

// node_modules/.deno/svelte-cubed@0.2.1/node_modules/svelte-cubed/components/helpers/SkeletonHelper.svelte
function create_fragment17(ctx) {
  const block = {
    c: noop,
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: noop,
    p: noop,
    i: noop,
    o: noop,
    d: noop
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment17.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance17($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("SkeletonHelper", slots, []);
  const { root, parent } = setup();
  onMount(() => {
    let helper;
    let destroyed = false;
    tick().then(() => {
      if (!destroyed) {
        helper = new SkeletonHelper(parent);
        root.scene.add(helper);
        root.invalidate();
      }
    });
    return () => {
      destroyed = true;
      root.scene.remove(helper);
      root.invalidate();
    };
  });
  const writable_props = [];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<SkeletonHelper> was created with unknown prop '${key}'`);
  });
  $$self.$capture_state = () => ({
    onMount,
    tick,
    THREE: three_module_exports,
    setup,
    root,
    parent
  });
  return [];
}
var SkeletonHelper2 = class extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance17, create_fragment17, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "SkeletonHelper",
      options,
      id: create_fragment17.name
    });
  }
};
var SkeletonHelper_default = SkeletonHelper2;

// node_modules/.deno/three@0.153.0/node_modules/three/examples/jsm/helpers/VertexNormalsHelper.js
var _v1 = new Vector3();
var _v2 = new Vector3();
var _normalMatrix = new Matrix3();
var VertexNormalsHelper = class extends LineSegments {
  constructor(object, size = 1, color = 16711680) {
    const geometry2 = new BufferGeometry();
    const nNormals = object.geometry.attributes.normal.count;
    const positions = new Float32BufferAttribute(nNormals * 2 * 3, 3);
    geometry2.setAttribute("position", positions);
    super(geometry2, new LineBasicMaterial({ color, toneMapped: false }));
    this.object = object;
    this.size = size;
    this.type = "VertexNormalsHelper";
    this.matrixAutoUpdate = false;
    this.update();
  }
  update() {
    this.object.updateMatrixWorld(true);
    _normalMatrix.getNormalMatrix(this.object.matrixWorld);
    const matrixWorld = this.object.matrixWorld;
    const position2 = this.geometry.attributes.position;
    const objGeometry = this.object.geometry;
    if (objGeometry) {
      const objPos = objGeometry.attributes.position;
      const objNorm = objGeometry.attributes.normal;
      let idx = 0;
      for (let j = 0, jl = objPos.count; j < jl; j++) {
        _v1.fromBufferAttribute(objPos, j).applyMatrix4(matrixWorld);
        _v2.fromBufferAttribute(objNorm, j);
        _v2.applyMatrix3(_normalMatrix).normalize().multiplyScalar(this.size).add(_v1);
        position2.setXYZ(idx, _v1.x, _v1.y, _v1.z);
        idx = idx + 1;
        position2.setXYZ(idx, _v2.x, _v2.y, _v2.z);
        idx = idx + 1;
      }
    }
    position2.needsUpdate = true;
  }
  dispose() {
    this.geometry.dispose();
    this.material.dispose();
  }
};

// node_modules/.deno/svelte-cubed@0.2.1/node_modules/svelte-cubed/components/helpers/VertexNormalsHelper.svelte
function create_fragment18(ctx) {
  const block = {
    c: noop,
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: noop,
    p: noop,
    i: noop,
    o: noop,
    d: noop
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment18.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance18($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("VertexNormalsHelper", slots, []);
  let { size = 1 } = $$props;
  let { color = 16711680 } = $$props;
  const { root, parent } = setup();
  const helper = new VertexNormalsHelper(parent, size, color);
  root.scene.add(helper);
  root.before_render(() => {
    helper.update();
  });
  onDestroy(() => {
    root.scene.remove(helper);
    root.invalidate();
  });
  const writable_props = ["size", "color"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<VertexNormalsHelper> was created with unknown prop '${key}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("size" in $$props2)
      $$invalidate(0, size = $$props2.size);
    if ("color" in $$props2)
      $$invalidate(1, color = $$props2.color);
  };
  $$self.$capture_state = () => ({
    VertexNormalsHelper,
    onDestroy,
    setup,
    size,
    color,
    root,
    parent,
    helper
  });
  $$self.$inject_state = ($$props2) => {
    if ("size" in $$props2)
      $$invalidate(0, size = $$props2.size);
    if ("color" in $$props2)
      $$invalidate(1, color = $$props2.color);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*size*/
    1) {
      $:
        helper.size = size;
    }
  };
  return [size, color];
}
var VertexNormalsHelper_1 = class extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance18, create_fragment18, safe_not_equal, { size: 0, color: 1 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "VertexNormalsHelper_1",
      options,
      id: create_fragment18.name
    });
  }
  get size() {
    throw new Error("<VertexNormalsHelper>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set size(value) {
    throw new Error("<VertexNormalsHelper>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get color() {
    throw new Error("<VertexNormalsHelper>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set color(value) {
    throw new Error("<VertexNormalsHelper>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
};
var VertexNormalsHelper_default = VertexNormalsHelper_1;
export {
  AmbientLight_default as AmbientLight,
  Animation_default as Animation,
  Bone_default as Bone,
  Canvas_default as Canvas,
  DirectionalLight_default as DirectionalLight,
  Group_default as Group,
  HemisphereLight_default as HemisphereLight,
  Mesh_default as Mesh,
  OrbitControls_default as OrbitControls,
  OrthographicCamera_default as OrthographicCamera,
  PerspectiveCamera_default as PerspectiveCamera,
  PointLight_default as PointLight,
  Primitive_default as Primitive,
  Skeleton_default as Skeleton,
  SkeletonHelper_default as SkeletonHelper,
  SkinnedMesh_default as SkinnedMesh,
  SpotLight_default as SpotLight,
  VertexNormalsHelper_default as VertexNormalsHelper,
  getCapabilities,
  getInvalidator,
  onFrame
};
//# sourceMappingURL=svelte-cubed.js.map
