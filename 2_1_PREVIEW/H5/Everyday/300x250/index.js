(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib._300x250_braava_top_03 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._300x250_icon_water_01 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._300x250_logo_1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._300x250_top = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Everyday_300x250_background_close_04 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Everyday_300x250_background_mid_01 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Everyday_300x250_braava_01 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Everyday_300x250_braava_01_med = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Spray_spray_01 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Spray_spray_03 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Spray_spray_03_blue = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.txt1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.txt2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.txt3 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.txt4 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.txt5 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.txt6 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.txt7 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.txtcta = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.text_07 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib._300x250_icon_water_01();
	this.instance.setTransform(112,-3);

	// Layer 1
	this.instance_1 = new lib.txt7();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-3,134,22);


(lib.text_06 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.txt6();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,255,133);


(lib.text_05 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.txt5();
	this.instance.setTransform(-45,0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-45,0,186,23);


(lib.text_04 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.txt4();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,207,28);


(lib.text_03 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.txt3();
	this.instance.setTransform(-3,0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3,0,138,52);


(lib.text_02 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.txt2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,165,52);


(lib.text_01 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.txt1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,86,29);


(lib.spray_03_nstd = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Spray_spray_03();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,37,52);


(lib.spray_03_blue_nstd = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.Spray_spray_03_blue();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,37,52);


(lib.spray_01_nstd = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Spray_spray_01();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,45,60);


(lib.logo_lockup_corner = function() {
	this.initialize();

	// 300x250_logo_1.png
	this.instance = new lib._300x250_logo_1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,76,46);


(lib.logo_braava_jet = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1AA2DC").s().p("AARAKIgCgPIgBAFIgEAKIgDAAIgGgPIgBAPIgBAAIABgTIAEAAIAEAPIAGgPIAEAAIABATgAgMAKIAAgQIgGAAIAAgDIAPAAIAAADIgGAAIAAAQg");
	this.shape.setTransform(64.5,1.8,0.75,0.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1AA2DC").s().p("AgQAcIAAgpIgLAAIAAgSIALAAIAAgdIAUAAIAAAdIAXAAIAAASIgXAAIAAAoQAAAJADADQADAEAHAAQAGAAAFgCIAAASQgIACgJAAQgbAAAAghg");
	this.shape_1.setTransform(60.4,5.6,0.75,0.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1AA2DC").s().p("AgfAjQgOgPAAgUQAAgUAMgNQANgPAUAAQAWAAANAPQALAOAAATIAAAFIhGAAQAAALAJAIQAIAIAJAAQANAAAIgLIAWAAQgMAcgfAAQgTAAgOgOgAgQgZQgHAHgBAJIAxAAQgBgJgHgHQgHgHgKAAQgJAAgHAHg");
	this.shape_2.setTransform(54.1,6.7,0.75,0.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1AA2DC").s().p("AgZBRIAAgTQAHADAIAAQANAAAAgVIAAhUIAWAAIAABTQgBApgfAAQgGAAgMgDgAABg9IAAgWIAYAAIAAAWg");
	this.shape_3.setTransform(47.7,6.3,0.75,0.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#221F20").s().p("AghAkQgPgNAAgXQAAgUAOgOQANgOATAAQARAAAMAPIABAAIAAgMIAUAAIAABbIgUAAIAAgMIgBAAQgMAPgSAAQgRAAgNgNgAgSgUQgHAJAAALQAAAMAHAIQAIAKALAAQALAAAIgJQAIgIAAgNQABgMgJgJQgHgJgMAAQgLAAgIAKg");
	this.shape_4.setTransform(39,6.7,0.75,0.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#221F20").s().p("AgIAuIgjhbIAXAAIAUBEIAAAAIAGgXIAQgtIAWAAIgjBbg");
	this.shape_5.setTransform(31.8,6.7,0.75,0.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#221F20").s().p("AghAkQgPgNAAgXQAAgUAOgOQANgOATAAQARAAAMAPIABAAIAAgMIAUAAIAABbIgUAAIAAgMIgBAAQgMAPgSAAQgSAAgMgNgAgSgUQgHAJAAALQAAAMAHAIQAIAKALAAQALAAAIgJQAIgIAAgNQABgMgJgJQgHgJgMAAQgLAAgIAKg");
	this.shape_6.setTransform(24.2,6.7,0.75,0.75);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#221F20").s().p("AghAkQgPgNAAgXQAAgUAOgOQANgOAUAAQAQAAAMAPIABAAIAAgMIAUAAIAABbIgUAAIAAgMIgBAAQgMAPgSAAQgSAAgMgNgAgSgUQgHAJAAALQAAAMAHAIQAHAKAMAAQALAAAIgJQAIgIAAgNQABgMgJgJQgIgJgLAAQgLAAgIAKg");
	this.shape_7.setTransform(15.8,6.7,0.75,0.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#221F20").s().p("AgaAvIAAhaIAVAAIAAANIAAAAQAIgQAQAAIAIAAIAAAVIgKgBQgWAAAAAbIAAAug");
	this.shape_8.setTransform(9.6,6.5,0.75,0.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#221F20").s().p("AgqBBIAAiBIAiAAQASAAAMAIQAMAJAAAQQAAAVgXAHIAAAAQAPACAJAIQAHAJABAMQAAASgOAKQgMAJgSAAgAgUAvIASAAQAVAAAAgVQAAgJgHgGQgGgFgKAAIgQAAgAgUgKIAMAAQAUAAgBgTQABgRgVAAIgLAAg");
	this.shape_9.setTransform(3.2,5.2,0.75,0.75);

	this.addChild(this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,66.1,12.6);


(lib.icon_registered = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgOAPQgGgHAAgIQAAgHAGgGQAHgHAHAAQAIAAAHAHQAGAGAAAHQAAAIgGAHQgHAGgIAAQgHAAgHgGgAgLgLQgFAFAAAGQAAAHAFAFQAFAFAGAAQAGAAAGgFQAFgFAAgHQAAgGgFgFQgGgEgGAAQgGAAgFAEgAAFALIgFgJIgCAAIAAAJIgFAAIAAgWIAHAAQAJABAAAHQAAAEgFABIAHAJgAgCAAIACAAQAEAAAAgDQAAgDgEAAIgCAAg");
	this.shape.setTransform(2.1,2.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,4.3,4.3);


(lib.gleam = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.51,1],-67,0,67,0).s().p("AqdDlIAAnKIU7AAIAAHKg");
	this.shape.setTransform(67,23);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,134,46);


(lib.corner_highlight = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],-8.7,50.6,171.5,289.4).s().p("A1+SZMAr4gk2MAAFAk7g");
	this.shape.setTransform(60.8,88.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-80,-30,281.5,236.5);


(lib.circle_white_grad_01 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,128.2).s().p("AuVHGQl8i2AAkHQAAkEF8i8QF8i8IZgFQIagEF7C3QF9C3AAEGQAAEEl9C9Ql7C7oaAFIgVAAQoMAAl0izg");
	this.shape.setTransform(129.9,63.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,259.7,126.6);


(lib.button_cta_text = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.txtcta();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,95,15);


(lib.button_cta_bg = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1AA2DC").s().p("A3bJEIAAyHMAu2AAAIAASHg");
	this.shape.setTransform(69,13.5,0.46,0.233);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,138,27);


(lib.braava_shadow_01 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(42,16,0,0.812)","rgba(42,16,0,0.584)","rgba(42,16,0,0.412)","rgba(42,16,0,0.086)","rgba(42,16,0,0)"],[0,0.192,0.42,0.792,1],0,0,0,0,0,49.3).s().p("AlgFhQiTiSAAjPQAAjNCTiTQCSiSDOAAQDOAACTCSQCSCTAADNQAADPiSCSQiTCSjOAAQjOAAiSiSg");
	this.shape.setTransform(50,50);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.braava_robot_med = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Everyday_300x250_braava_01_med.png
	this.instance = new lib.Everyday_300x250_braava_01_med();
	this.instance.setTransform(0.1,-0.2,2.97,2.97);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,-0.2,231.7,151.5);


(lib.braava_robot_lg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// braava
	this.instance = new lib.Everyday_300x250_braava_01();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,231,152);


(lib.braava_clean_light = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1AA2DC").s().p("AgKARIAEgEQAEgDgBgCIgDgWQACAAABgFIABgFIAFgLIAIAbIgDAGQgDAFgBgBIAHAYIgOAKQgBgCgGgRg");
	this.shape.setTransform(5,5.3);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1AA2DC").s().p("AghAiQgPgPgBgTQABgUAPgOQAOgPATAAQAUAAAPAPQAOAOAAAUQAAATgOAPQgPAPgUAAQgTAAgOgPgAgegfQgNAOAAARQAAASANAMQANAOARABQATgBANgOQANgNAAgRQAAgRgNgOQgNgNgTABQgRgBgNANg");
	this.shape_1.setTransform(5,5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,10,10);


(lib.box_white = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.box_blue_01 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1AA2DC").s().p("A3bI/IAAx9MAu2AAAIAAR9g");
	this.shape.setTransform(150,57.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,115);


(lib.bar_white = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiaAOIAAgcIE0AAIAAAcg");
	this.shape.setTransform(15.5,1.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,31,3);


(lib.bar_green = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib._300x250_top();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,51);


(lib.background_mid = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Everyday_300x250_background_mid_01();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,258);


(lib.background_close = function() {
	this.initialize();

	// Everyday_300x250_background_close_04.png
	this.instance = new lib.Everyday_300x250_background_close_04();
	this.instance.setTransform(-20,-20);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20,-20,340,270);


(lib.spray_03_nstd_loop_slow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_28 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(28).call(this.frame_28).wait(36));

	// spray_03_nstd
	this.instance = new lib.spray_03_nstd();
	this.instance.setTransform(28,-11.2,0.195,0.195,0,0,0,26.9,2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:27.1,scaleX:0.39,scaleY:0.39,x:27,y:-6.2,alpha:1},5).to({regX:27,scaleX:1,scaleY:1,y:2},8).to({regX:27.1,regY:2.1,scaleX:1.7,scaleY:1.45,x:24.2,y:26.6},8).to({scaleX:3.5,scaleY:2.37,x:18.2,y:66.6,alpha:0},6).to({_off:true},1).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-11.6,37,63.6);


(lib.spray_03_nstd_loop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_11 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(11).call(this.frame_11).wait(36));

	// spray_03_nstd
	this.instance = new lib.spray_03_nstd();
	this.instance.setTransform(28,-11.2,0.195,0.195,0,0,0,26.9,2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:27.1,scaleX:0.39,scaleY:0.39,x:27,y:-6.2,alpha:1},2).to({regX:27,scaleX:1,scaleY:1,y:2},3).to({regX:27.1,regY:2.1,scaleX:1.7,scaleY:1.45,x:24.2,y:26.6},3).to({scaleX:3.5,scaleY:2.37,x:18.2,y:66.6,alpha:0},2).to({_off:true},1).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-11.6,37,63.6);


(lib.spray_03_blue_nstd_loop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_11 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(11).call(this.frame_11).wait(36));

	// spray_03_nstd
	this.instance = new lib.spray_03_blue_nstd();
	this.instance.setTransform(28,-11.2,0.195,0.195,0,0,0,26.9,2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:27.1,scaleX:0.39,scaleY:0.39,x:27,y:-6.2,alpha:1},2).to({regX:27,scaleX:1,scaleY:1,y:2},3).to({regX:27.1,regY:2.1,scaleX:1.7,scaleY:1.45,x:24.2,y:26.6},3).to({scaleX:3.5,scaleY:2.37,x:18.2,y:66.6,alpha:0},2).to({_off:true},1).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-11.6,37,63.6);


(lib.spray_03_blue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_44 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(3));

	// spray_03_nstd_loop
	this.instance = new lib.spray_03_blue_nstd_loop();
	this.instance.setTransform(27,2,1,1,0,0,0,27,2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({_off:false},0).wait(17));

	// spray_03_nstd_loop
	this.instance_1 = new lib.spray_03_blue_nstd_loop();
	this.instance_1.setTransform(23.5,3,0.927,1.041,0,16.2,180,27,2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(27).to({_off:false},0).wait(20));

	// spray_03_nstd_loop
	this.instance_2 = new lib.spray_03_blue_nstd_loop();
	this.instance_2.setTransform(27,2,1,1,0,0,0,27,2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},0).wait(23));

	// spray_03_nstd_loop
	this.instance_3 = new lib.spray_03_blue_nstd_loop();
	this.instance_3.setTransform(23.5,3,0.927,1.041,0,16.2,180,27,2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21).to({_off:false},0).wait(26));

	// spray_03_nstd_loop
	this.instance_4 = new lib.spray_03_blue_nstd_loop();
	this.instance_4.setTransform(26,13,1,1,0,0,0,27,2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(18).to({_off:false},0).wait(29));

	// spray_03_nstd_loop
	this.instance_5 = new lib.spray_03_blue_nstd_loop();
	this.instance_5.setTransform(27,2,1,1,0,0,0,27,2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15).to({_off:false},0).wait(32));

	// spray_03_nstd_loop
	this.instance_6 = new lib.spray_03_blue_nstd_loop();
	this.instance_6.setTransform(23.5,3,0.927,1.041,0,16.2,180,27,2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(12).to({_off:false},0).wait(35));

	// spray_03_nstd_loop
	this.instance_7 = new lib.spray_03_blue_nstd_loop();
	this.instance_7.setTransform(26,11,1,1,0,0,0,27,2);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(9).to({_off:false},0).wait(38));

	// spray_03_nstd_loop
	this.instance_8 = new lib.spray_03_blue_nstd_loop();
	this.instance_8.setTransform(23.5,3,0.927,1.041,0,16.2,180,27,2);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(6).to({_off:false},0).wait(41));

	// spray_03_nstd_loop
	this.instance_9 = new lib.spray_03_blue_nstd_loop();
	this.instance_9.setTransform(26,11,1,1,0,0,0,27,2);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(3).to({_off:false},0).wait(44));

	// spray_03_nstd_loop
	this.instance_10 = new lib.spray_03_blue_nstd_loop();
	this.instance_10.setTransform(18.5,20.2,1,1,0,0,0,18.5,20.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(47));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-345,-291,1038,1154);


(lib.spray_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_44 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(3));

	// spray_03_nstd_loop
	this.instance = new lib.spray_03_nstd_loop();
	this.instance.setTransform(27,2,1,1,0,0,0,27,2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({_off:false},0).wait(17));

	// spray_03_nstd_loop
	this.instance_1 = new lib.spray_03_nstd_loop();
	this.instance_1.setTransform(23.5,3,0.927,1.041,0,16.2,180,27,2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(27).to({_off:false},0).wait(20));

	// spray_03_nstd_loop
	this.instance_2 = new lib.spray_03_nstd_loop();
	this.instance_2.setTransform(27,2,1,1,0,0,0,27,2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},0).wait(23));

	// spray_03_nstd_loop
	this.instance_3 = new lib.spray_03_nstd_loop();
	this.instance_3.setTransform(23.5,3,0.927,1.041,0,16.2,180,27,2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21).to({_off:false},0).wait(26));

	// spray_03_nstd_loop
	this.instance_4 = new lib.spray_03_nstd_loop();
	this.instance_4.setTransform(26,13,1,1,0,0,0,27,2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(18).to({_off:false},0).wait(29));

	// spray_03_nstd_loop
	this.instance_5 = new lib.spray_03_nstd_loop();
	this.instance_5.setTransform(27,2,1,1,0,0,0,27,2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15).to({_off:false},0).wait(32));

	// spray_03_nstd_loop
	this.instance_6 = new lib.spray_03_nstd_loop();
	this.instance_6.setTransform(23.5,3,0.927,1.041,0,16.2,180,27,2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(12).to({_off:false},0).wait(35));

	// spray_03_nstd_loop
	this.instance_7 = new lib.spray_03_nstd_loop();
	this.instance_7.setTransform(26,11,1,1,0,0,0,27,2);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(9).to({_off:false},0).wait(38));

	// spray_03_nstd_loop
	this.instance_8 = new lib.spray_03_nstd_loop();
	this.instance_8.setTransform(23.5,3,0.927,1.041,0,16.2,180,27,2);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(6).to({_off:false},0).wait(41));

	// spray_03_nstd_loop
	this.instance_9 = new lib.spray_03_nstd_loop();
	this.instance_9.setTransform(29,9.7,1,1,0,0,0,27,2);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(3).to({_off:false},0).wait(44));

	// spray_03_nstd_loop
	this.instance_10 = new lib.spray_03_nstd_loop();
	this.instance_10.setTransform(18.5,20.2,1,1,0,0,0,18.5,20.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(47));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-345,-291,1038,1154);


(lib.spray_01_slow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_35 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(35).call(this.frame_35).wait(1));

	// spray_01_nstd
	this.instance = new lib.spray_01_nstd();
	this.instance.setTransform(22.5,30,1,1,0,0,0,22.5,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:230},34,cjs.Ease.get(0.3)).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45,60);


(lib.spray_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_10 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(10).call(this.frame_10).wait(1));

	// spray_01_nstd
	this.instance = new lib.spray_01_nstd();
	this.instance.setTransform(22.5,30,1,1,0,0,0,22.5,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:230},9,cjs.Ease.get(0.3)).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45,60);


(lib.logo_irobot = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.icon_registered();
	this.instance.setTransform(108.8,1.7,0.824,0.814,0,0,0,2.1,2.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhOBVQgTgOAAgYQAAgHADgUIAEgUIAYhnIA+AAIgNA2QARgDANAAQAqAAAZAUQAQAOABAZQABANgDAMQgHAkggATQgcAQgnAAQgsABgXgTgAgTACQgDACgDAGIgEAPIgCARQAAAHABABQAHAJAPgBQAQABALgKQALgMAEgRQACgMgHgIQgGgGgRAAQgOAAgLAIg");
	this.shape.setTransform(64.3,10.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhNA8QgcgVAJgqQAHgkAkgUQAegSAlAAQAsAAAXAUQAYAVgHAkIgCAHQgHAjggATQgcARgnAAQgsAAgXgSgAgSgVQgMAJgDAMQgDAQAHAJQAHAIAPAAQARAAAKgJQALgLAEgQQACgNgHgHQgGgIgRAAQgNAAgMAKg");
	this.shape_1.setTransform(84.8,12.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhNA8QgcgWAJgpQAHgkAkgUQAfgSAkAAQArAAAXAUQAZAVgIAkIgBAHQgIAjgfATQgcARgnAAQgtAAgWgSgAgXgVQgLAJgDAMQgDAQAHAJQAGAIAQAAQAQAAAKgJQAMgLADgQQADgNgHgHQgHgIgQAAQgNAAgNAKg");
	this.shape_2.setTransform(43.9,12.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgtBFIAdiJIA+AAIgdCJg");
	this.shape_3.setTransform(4.7,13.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AA3BlIgnhIIg/AAIgPBIIhCAAIAdiJIBDAAIgFAUIA5AAQANAAAJgFQAMgGABgIQACgIgGgCQgHgGgPAAIh8AAIAKgxICUAAQAOAAAOAEQAQAGAIAKQARAVgGAeQgCAJgHAMQgGAJgHAGQgJAHgMAHIAuBQg");
	this.shape_4.setTransform(22,10.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgjAYIAKgvIA+AAIgKAvg");
	this.shape_5.setTransform(6.9,2.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgRBlQgLAAgIgDQgIgDgHgIQgHgJgBgLQAAgKACgLIAfiSIA5AAIgLAzIAoAAIgJAvIgpAAIgKAyQAAAEABACQAEADAIAAIAXAAIgJAsg");
	this.shape_6.setTransform(101.1,10.3);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,110.5,20.8);


(lib.button_cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{over:9,out:24});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_22 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_37 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(22).call(this.frame_22).wait(15).call(this.frame_37).wait(7));

	// button_cta_bg (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgiPtIAAkOIVjAAIAAEOg");
	mask.setTransform(134.5,100.5);

	// gleam
	this.instance = new lib.gleam();
	this.instance.setTransform(66,187,1,1,0,0,0,67,23);
	this.instance.alpha = 0;
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({x:335,alpha:0.59},10,cjs.Ease.get(-0.55)).to({_off:true},1).wait(24));

	// button_cta_text
	this.instance_1 = new lib.button_cta_text();
	this.instance_1.setTransform(222,187.5,1,1,0,0,0,70,7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(44));

	// button_cta_bg
	this.instance_2 = new lib.button_cta_bg();
	this.instance_2.setTransform(210.5,187.5,1,1,0,0,0,79.5,13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(44));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.braava_top = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_73 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(73).call(this.frame_73).wait(22));

	// 300x250_braava_top_02.png
	this.instance = new lib._300x250_braava_top_03();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(95));

	// braava_shadow_01
	this.instance_1 = new lib.braava_shadow_01();
	this.instance_1.setTransform(26,85.9,2.63,1.961,0,0,0,49.8,49.9);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:49.9,regY:50,x:26.3,y:86.1,alpha:0.199},9).wait(28).to({alpha:0},13).to({_off:true},1).wait(44));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105,-12,277,196);


(lib.braava_spray_specks = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_55 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(55).call(this.frame_55).wait(10));

	// spray_01_nstd
	this.instance = new lib.spray_01_nstd();
	this.instance.setTransform(152.2,275.3,1.334,1.776,0,0,0,22.5,30);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25).to({_off:false},0).wait(40));

	// spray_01_nstd
	this.instance_1 = new lib.spray_01_nstd();
	this.instance_1.setTransform(238.6,256.2,1.334,1.776,0,0,0,22.5,29.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off:false},0).wait(41));

	// spray_01_nstd
	this.instance_2 = new lib.spray_01_nstd();
	this.instance_2.setTransform(222.3,279.8,1.334,1.776,0,0,0,22.5,29.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(23).to({_off:false},0).wait(42));

	// spray_01_nstd
	this.instance_3 = new lib.spray_01_nstd();
	this.instance_3.setTransform(76.3,200.6,1.334,1.776,0,0,0,22.5,30);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(22).to({_off:false},0).wait(43));

	// spray_01_nstd
	this.instance_4 = new lib.spray_01_nstd();
	this.instance_4.setTransform(65.7,232.8,1.334,1.776,0,0,0,22.5,29.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(21).to({_off:false},0).wait(44));

	// spray_01_nstd
	this.instance_5 = new lib.spray_01_nstd();
	this.instance_5.setTransform(92.7,236.7,1.334,1.776,0,0,0,22.5,30);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(20).to({_off:false},0).wait(45));

	// spray_01_nstd
	this.instance_6 = new lib.spray_01_nstd();
	this.instance_6.setTransform(160.9,245.7,1.334,1.776,0,0,0,22.5,30);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(19).to({_off:false},0).wait(46));

	// spray_01_nstd
	this.instance_7 = new lib.spray_01_nstd();
	this.instance_7.setTransform(136,211.9,1.334,1.776,0,0,0,22.6,30);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(18).to({_off:false},0).wait(47));

	// spray_01_nstd
	this.instance_8 = new lib.spray_01_nstd();
	this.instance_8.setTransform(145.5,196.1,1.334,1.776,0,0,0,22.5,30);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(17).to({_off:false},0).wait(48));

	// spray_01_nstd
	this.instance_9 = new lib.spray_01_nstd();
	this.instance_9.setTransform(63.3,202.7,1.334,1.776,0,0,0,22.5,30);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(16).to({_off:false},0).wait(49));

	// spray_01_nstd
	this.instance_10 = new lib.spray_01_nstd();
	this.instance_10.setTransform(138.8,212.7,1.334,1.776,0,0,0,22.5,30);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(15).to({_off:false},0).wait(50));

	// spray_01_nstd
	this.instance_11 = new lib.spray_01_nstd();
	this.instance_11.setTransform(210.8,277.4,1.334,1.776,0,0,0,22.5,30);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(14).to({_off:false},0).wait(51));

	// spray_01_nstd
	this.instance_12 = new lib.spray_01_nstd();
	this.instance_12.setTransform(66.8,225.4,1.334,1.776,0,0,0,22.6,30);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(13).to({_off:false},0).wait(52));

	// spray_01_nstd
	this.instance_13 = new lib.spray_01_nstd();
	this.instance_13.setTransform(145.5,236.9,1.334,1.776,0,0,0,22.5,30);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(12).to({_off:false},0).wait(53));

	// spray_01_nstd
	this.instance_14 = new lib.spray_01_nstd();
	this.instance_14.setTransform(226.1,279.8,1.334,1.776,0,0,0,22.5,29.9);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(11).to({_off:false},0).wait(54));

	// spray_01_nstd
	this.instance_15 = new lib.spray_01_nstd();
	this.instance_15.setTransform(160.9,222.4,1.334,1.776,0,0,0,22.5,30);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(10).to({_off:false},0).wait(55));

	// spray_01_nstd
	this.instance_16 = new lib.spray_01_nstd();
	this.instance_16.setTransform(121.2,195.6,1.334,1.776,0,0,0,22.5,30);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(9).to({_off:false},0).wait(56));

	// spray_01_nstd
	this.instance_17 = new lib.spray_01_nstd();
	this.instance_17.setTransform(78.2,225.5,1.334,1.776,0,0,0,22.5,29.9);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(8).to({_off:false},0).wait(57));

	// spray_01_nstd
	this.instance_18 = new lib.spray_01_nstd();
	this.instance_18.setTransform(159.6,250.2,1.334,1.776,0,0,0,22.5,30);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(7).to({_off:false},0).wait(58));

	// spray_01_nstd
	this.instance_19 = new lib.spray_01_nstd();
	this.instance_19.setTransform(160.7,283.9,1.334,1.776,0,0,0,22.5,29.9);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(6).to({_off:false},0).wait(59));

	// spray_01_nstd
	this.instance_20 = new lib.spray_01_nstd();
	this.instance_20.setTransform(78.2,225.5,1.334,1.776,0,0,0,22.5,29.9);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(5).to({_off:false},0).wait(60));

	// spray_01_nstd
	this.instance_21 = new lib.spray_01_nstd();
	this.instance_21.setTransform(158.9,195.4,1.334,1.776,0,0,0,22.5,29.9);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(4).to({_off:false},0).wait(61));

	// spray_01_nstd
	this.instance_22 = new lib.spray_01_nstd();
	this.instance_22.setTransform(226.1,279.8,1.334,1.776,0,0,0,22.5,29.9);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(3).to({_off:false},0).wait(62));

	// spray_01_nstd
	this.instance_23 = new lib.spray_01_nstd();
	this.instance_23.setTransform(158.9,195.4,1.334,1.776,0,0,0,22.5,29.9);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(2).to({_off:false},0).wait(63));

	// spray_01_nstd
	this.instance_24 = new lib.spray_01_nstd();
	this.instance_24.setTransform(114.8,212,1.334,1.776,0,0,0,22.5,29.9);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(1).to({_off:false},0).wait(64));

	// spray_01_nstd
	this.instance_25 = new lib.spray_01_nstd();
	this.instance_25.setTransform(94.3,188.1,1.334,1.776,0,0,0,22.6,30.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(65));

	// circle_white_grad_01
	this.instance_26 = new lib.circle_white_grad_01();
	this.instance_26.setTransform(184.2,180.3,2.699,2.699,0,0,0,129.8,63.3);
	this.instance_26.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).to({alpha:1},16).wait(20).to({alpha:0},14).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-166,9.5,700.8,341.7);


(lib.braava_spray_blue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_54 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(54).call(this.frame_54).wait(9));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A2GJbQkmgfjNgHIaLysIB4AAIfwRrQhdgTgZgCQhmgMiCALQhdAHiyAYQiWAUhDACQjAAGj5ArQj7Asi4ABQj+gOjNAEQjNAEkrALQhAAChCAAQj0AAkVgdg");
	mask.setTransform(214.5,198.7);

	// spray_03
	this.instance = new lib.spray_03_blue();
	this.instance.setTransform(184.9,131.9,1.108,4.286,0,-54.9,180,26.4,-2.9);
	this.instance.alpha = 0.25;
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(61));

	// spray_03
	this.instance_1 = new lib.spray_03_blue();
	this.instance_1.setTransform(189.2,131.9,1.358,3.199,0,-39.7,0,26.4,-2.9);
	this.instance_1.alpha = 0.25;
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).wait(59));

	// spray_03
	this.instance_2 = new lib.spray_03_blue();
	this.instance_2.setTransform(194.1,131.9,3.755,2.486,0,-8,0,26.4,-2.9);
	this.instance_2.alpha = 0.25;
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).wait(59));

	// spray_03
	this.instance_3 = new lib.spray_03_blue();
	this.instance_3.setTransform(198.4,131.9,1.632,2.765,0,27.1,180,26.3,-2.9);
	this.instance_3.alpha = 0.25;
	this.instance_3._off = true;

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).wait(61));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("A4QI0QjngdirgoIa4xAIB5AAMAgUAQEQhRgOkxAWQkpAViyAfQjEAijqATQkQAVi8gOQkCgeiZgGQkKgLk3A6QiXAci9AAQjCAAjqgeg");
	mask_1.setTransform(214.1,194.9);

	// spray_03
	this.instance_4 = new lib.spray_03_blue();
	this.instance_4.setTransform(183.1,131.9,1.358,4.82,0,-59.3,0,26.4,-2.9);
	this.instance_4.alpha = 0.25;
	this.instance_4._off = true;

	this.instance_4.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).wait(62));

	// spray_03
	this.instance_5 = new lib.spray_03_blue();
	this.instance_5.setTransform(187,131.9,1.358,3.708,0,-48.4,0,26.4,-2.9);
	this.instance_5.alpha = 0.25;
	this.instance_5._off = true;

	this.instance_5.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3).to({_off:false},0).wait(60));

	// spray_03
	this.instance_6 = new lib.spray_03_blue();
	this.instance_6.setTransform(191.9,131.9,1.313,2.721,0,-25.2,180,26.3,-2.9);
	this.instance_6.alpha = 0.25;
	this.instance_6._off = true;

	this.instance_6.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(5).to({_off:false},0).wait(58));

	// spray_03
	this.instance_7 = new lib.spray_03_blue();
	this.instance_7.setTransform(195.8,131.9,1.358,2.486,0,7.9,0,26.2,-2.9);
	this.instance_7.alpha = 0.25;
	this.instance_7._off = true;

	this.instance_7.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(3).to({_off:false},0).wait(60));

	// spray_03
	this.instance_8 = new lib.spray_03_blue();
	this.instance_8.setTransform(200.5,131.9,1.358,3.148,0,38.5,0,26.2,-2.9);
	this.instance_8.alpha = 0.25;
	this.instance_8._off = true;

	this.instance_8.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({_off:false},0).wait(62));

	// spray_03
	this.instance_9 = new lib.spray_03_blue();
	this.instance_9.setTransform(202.9,131.9,1.358,3.723,0,48.6,0,26.2,-2.9);
	this.instance_9.alpha = 0.25;

	this.instance_9.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(63));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,367,211);


(lib.braava_spray = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_66 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(66).call(this.frame_66).wait(9));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A2GJbQkmgfjNgHIaLysIB4AAIfwRrQhdgTgZgCQhmgMiCALQhdAHiyAYQiWAUhDACQjAAGj5ArQj7Asi4ABQj+gOjNAEQjNAEkrALQhAAChCAAQj0AAkVgdg");
	mask.setTransform(214.5,198.7);

	// spray_01
	this.instance = new lib.spray_01();
	this.instance.setTransform(207.2,125.4,0.81,1,0,-44.8,135.2,22.2,30.2);
	this.instance.alpha = 0.301;
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(26).to({_off:false},0).wait(49));

	// spray_01
	this.instance_1 = new lib.spray_01();
	this.instance_1.setTransform(194.2,126.5,0.81,1,0,-54.8,125.2,22.3,30.2);
	this.instance_1.alpha = 0.301;
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).wait(71));

	// spray_01
	this.instance_2 = new lib.spray_01();
	this.instance_2.setTransform(240.8,77.7,1,1.281,50,0,0,22.9,-0.4);
	this.instance_2.alpha = 0.301;
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(21).to({_off:false},0).wait(54));

	// spray_01
	this.instance_3 = new lib.spray_01();
	this.instance_3.setTransform(190.8,117.7,1,1,50,0,0,22.9,-0.4);
	this.instance_3.alpha = 0.602;

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(75));

	// spray_03
	this.instance_4 = new lib.spray_03();
	this.instance_4.setTransform(183,131.9,1.108,4.114,0,-53.2,180,26.4,-2.9);
	this.instance_4.alpha = 0.25;
	this.instance_4._off = true;

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({_off:false},0).wait(73));

	// spray_03
	this.instance_5 = new lib.spray_03();
	this.instance_5.setTransform(189.2,131.9,1.358,3.199,0,-39.7,0,26.4,-2.9);
	this.instance_5.alpha = 0.25;
	this.instance_5._off = true;

	this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).wait(71));

	// spray_03
	this.instance_6 = new lib.spray_03();
	this.instance_6.setTransform(194.9,131.9,1.667,2.513,0,-11.6,0,26.2,-2.9);
	this.instance_6.alpha = 0.25;
	this.instance_6._off = true;

	this.instance_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(4).to({_off:false},0).wait(71));

	// spray_03
	this.instance_7 = new lib.spray_03();
	this.instance_7.setTransform(198.4,131.9,1.632,2.765,0,27.1,180,26.3,-2.9);
	this.instance_7.alpha = 0.25;
	this.instance_7._off = true;

	this.instance_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(2).to({_off:false},0).wait(73));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("A4QI0QjngdirgoIa4xAIB5AAMAgUAQEQhRgOkxAWQkpAViyAfQjEAijqATQkQAVi8gOQkCgeiZgGQkKgLk3A6QiXAci9AAQjCAAjqgeg");
	mask_1.setTransform(214.1,194.9);

	// spray_01
	this.instance_8 = new lib.spray_01();
	this.instance_8.setTransform(187.2,135.4,0.81,1,0,-44.8,135.2,22.2,30.2);
	this.instance_8.alpha = 0.301;
	this.instance_8._off = true;

	this.instance_8.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(17).to({_off:false},0).wait(58));

	// spray_01
	this.instance_9 = new lib.spray_01();
	this.instance_9.setTransform(240.8,77.7,1,1.281,50,0,0,22.9,-0.4);
	this.instance_9.alpha = 0.301;
	this.instance_9._off = true;

	this.instance_9.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(30).to({_off:false},0).wait(45));

	// spray_01
	this.instance_10 = new lib.spray_01();
	this.instance_10.setTransform(240.8,77.7,1,1.281,50,0,0,22.9,-0.4);
	this.instance_10.alpha = 0.301;
	this.instance_10._off = true;

	this.instance_10.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(11).to({_off:false},0).wait(64));

	// spray_03
	this.instance_11 = new lib.spray_03();
	this.instance_11.setTransform(183.1,131.9,1.358,4.82,0,-59.3,0,26.4,-2.9);
	this.instance_11.alpha = 0.25;
	this.instance_11._off = true;

	this.instance_11.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({_off:false},0).wait(74));

	// spray_03
	this.instance_12 = new lib.spray_03();
	this.instance_12.setTransform(187,131.9,1.358,3.708,0,-48.4,0,26.4,-2.9);
	this.instance_12.alpha = 0.25;
	this.instance_12._off = true;

	this.instance_12.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(3).to({_off:false},0).wait(72));

	// spray_03
	this.instance_13 = new lib.spray_03();
	this.instance_13.setTransform(191.9,131.9,1.313,2.721,0,-25.2,180,26.3,-2.9);
	this.instance_13.alpha = 0.25;
	this.instance_13._off = true;

	this.instance_13.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(5).to({_off:false},0).wait(70));

	// spray_03
	this.instance_14 = new lib.spray_03();
	this.instance_14.setTransform(195.8,131.9,1.358,2.486,0,7.9,0,26.2,-2.9);
	this.instance_14.alpha = 0.25;
	this.instance_14._off = true;

	this.instance_14.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(3).to({_off:false},0).wait(72));

	// spray_03
	this.instance_15 = new lib.spray_03();
	this.instance_15.setTransform(200.1,131.9,1.411,3.148,0,38.5,0,26.3,-2.9);
	this.instance_15.alpha = 0.25;
	this.instance_15._off = true;

	this.instance_15.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1).to({_off:false},0).wait(74));

	// spray_03
	this.instance_16 = new lib.spray_03();
	this.instance_16.setTransform(202.9,131.9,1.358,3.723,0,48.6,0,26.2,-2.9);
	this.instance_16.alpha = 0.25;

	this.instance_16.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(75));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-356.1,-338.1,1822.5,1258.3);


(lib.braava_droplets_slow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_136 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(136).call(this.frame_136).wait(6));

	// droplet_04
	this.instance = new lib.spray_01_nstd();
	this.instance.setTransform(265.3,245.3,1,1,-80,0,0,14,12.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(28).to({_off:false},0).to({regX:14.1,x:288.5,y:270,alpha:1},35,cjs.Ease.get(1)).wait(79));

	// droplet_05
	this.instance_1 = new lib.spray_01_nstd();
	this.instance_1.setTransform(184.2,220.1,1,1,67,0,0,29.9,14);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25).to({_off:false},0).to({regX:30,rotation:67.7,x:204.9,y:272.6,alpha:1},35,cjs.Ease.get(1)).wait(82));

	// droplet_01
	this.instance_2 = new lib.spray_01_nstd();
	this.instance_2.setTransform(236.9,218,0.291,0.457,0,0,0,16.5,8.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30).to({_off:false},0).to({x:287.2,y:261.2,alpha:1},35,cjs.Ease.get(1)).wait(77));

	// droplet_05
	this.instance_3 = new lib.spray_01_nstd();
	this.instance_3.setTransform(351.1,236.3,1,1,90,0,0,30,14);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).to({x:365.1,y:265.3,alpha:1},35,cjs.Ease.get(1)).wait(93));

	// droplet_05
	this.instance_4 = new lib.spray_01_nstd();
	this.instance_4.setTransform(240.2,233.9,0.56,0.56,90,0,0,30,14);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:80.7,x:263.2,y:270,alpha:1},35,cjs.Ease.get(1)).wait(97));

	// droplet_02
	this.instance_5 = new lib.spray_01_nstd();
	this.instance_5.setTransform(134.2,214.9,1,1,0,0,0,17,7.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(5).to({_off:false},0).to({x:125.2,y:244.9,alpha:1},35,cjs.Ease.get(1)).wait(102));

	// droplet_01
	this.instance_6 = new lib.spray_01_nstd();
	this.instance_6.setTransform(138.5,234.9,1,1,90,0,0,16.5,8.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(3).to({_off:false},0).to({x:118.5,y:264.9,alpha:1},32,cjs.Ease.get(1)).wait(107));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,367,211);


(lib.braava_droplets = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_72 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(72).call(this.frame_72).wait(9));

	// droplet_03
	this.instance = new lib.spray_01_nstd();
	this.instance.setTransform(248,212,1,1,0,0,0,28.5,9.5);
	this.instance.alpha = 0.301;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).to({x:274.3,y:248.6,alpha:1},17,cjs.Ease.get(1)).wait(54));

	// droplet_01
	this.instance_1 = new lib.spray_01_nstd();
	this.instance_1.setTransform(314.4,203.4,0.249,0.392,0,0,0,16.4,8.4);
	this.instance_1.alpha = 0.301;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({_off:false},0).to({x:354.4,y:238.4,alpha:1},17,cjs.Ease.get(1)).wait(52));

	// droplet_01
	this.instance_2 = new lib.spray_01_nstd();
	this.instance_2.setTransform(286.7,204.5,0.415,0.653,0,0,0,16.5,8.5);
	this.instance_2.alpha = 0.301;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({_off:false},0).to({x:331.4,y:257.6,alpha:1},17,cjs.Ease.get(1)).wait(56));

	// droplet_01
	this.instance_3 = new lib.spray_01_nstd();
	this.instance_3.setTransform(247.8,210.1,0.291,0.457,0,0,0,16.5,8.6);
	this.instance_3.alpha = 0.301;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({x:262.8,y:264.1,alpha:1},17,cjs.Ease.get(1)).wait(55));

	// droplet_01
	this.instance_4 = new lib.spray_01_nstd();
	this.instance_4.setTransform(225.4,205.9,0.415,0.653,0,0,0,16.5,8.5);
	this.instance_4.alpha = 0.301;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).to({y:244.9,alpha:1},17,cjs.Ease.get(1)).wait(55));

	// droplet_01
	this.instance_5 = new lib.spray_01_nstd();
	this.instance_5.setTransform(161.1,225.8,0.415,0.653,0,0,0,16.5,8.5);
	this.instance_5.alpha = 0.301;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(8).to({_off:false},0).to({x:155.1,y:271.8,alpha:1},17,cjs.Ease.get(1)).wait(56));

	// droplet_05
	this.instance_6 = new lib.spray_01_nstd();
	this.instance_6.setTransform(293.2,214.6,0.662,0.654,0,0,0,30,14);
	this.instance_6.alpha = 0.301;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(7).to({_off:false},0).to({x:292.2,y:252.6,alpha:1},17,cjs.Ease.get(1)).wait(57));

	// droplet_04
	this.instance_7 = new lib.spray_01_nstd();
	this.instance_7.setTransform(305.3,225.4,1,1,0,0,0,14,12.5);
	this.instance_7.alpha = 0.301;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(7).to({_off:false},0).to({x:313.1,y:250.7,alpha:1},17,cjs.Ease.get(1)).wait(57));

	// droplet_05
	this.instance_8 = new lib.spray_01_nstd();
	this.instance_8.setTransform(184.2,220.2,1,1,0,0,0,30,14);
	this.instance_8.alpha = 0.301;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(6).to({_off:false},0).to({x:171.2,y:247.2,alpha:1},17,cjs.Ease.get(1)).wait(58));

	// droplet_04
	this.instance_9 = new lib.spray_01_nstd();
	this.instance_9.setTransform(185.3,220.2,1,0.408,0,0,0,14,12.5);
	this.instance_9.alpha = 0.301;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(5).to({_off:false},0).to({x:180.3,y:247.2,alpha:1},17,cjs.Ease.get(1)).wait(59));

	// droplet_01
	this.instance_10 = new lib.spray_01_nstd();
	this.instance_10.setTransform(206.9,218,0.291,0.457,0,0,0,16.5,8.6);
	this.instance_10.alpha = 0.301;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(6).to({_off:false},0).to({x:207.9,y:261,alpha:1},17,cjs.Ease.get(1)).wait(58));

	// droplet_01
	this.instance_11 = new lib.spray_01_nstd();
	this.instance_11.setTransform(195.8,219.4,0.415,0.653,0,0,0,16.5,8.5);
	this.instance_11.alpha = 0.301;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(4).to({_off:false},0).to({x:191.8,y:253.4,alpha:1},17,cjs.Ease.get(1)).wait(60));

	// droplet_05
	this.instance_12 = new lib.spray_01_nstd();
	this.instance_12.setTransform(351.1,236.3,1,1,90,0,0,30,14);
	this.instance_12.alpha = 0.301;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(2).to({_off:false},0).to({x:365.1,y:265.3,alpha:1},17,cjs.Ease.get(1)).wait(62));

	// droplet_01
	this.instance_13 = new lib.spray_01_nstd();
	this.instance_13.setTransform(330.8,213.8,0.415,0.653,90,0,0,16.5,8.5);
	this.instance_13.alpha = 0.301;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({_off:false},0).to({x:393.5,y:243,alpha:1},17,cjs.Ease.get(1)).wait(63));

	// droplet_05
	this.instance_14 = new lib.spray_01_nstd();
	this.instance_14.setTransform(240.2,233.9,1,1,0,0,0,30,14);
	this.instance_14.alpha = 0.301;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(2).to({_off:false},0).to({x:234.4,y:250.5,alpha:1},17,cjs.Ease.get(1)).wait(62));

	// droplet_02
	this.instance_15 = new lib.spray_01_nstd();
	this.instance_15.setTransform(134.2,214.9,1,1,0,0,0,17,7.5);
	this.instance_15.alpha = 0.301;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1).to({_off:false},0).to({x:125.2,y:244.9,alpha:1},17,cjs.Ease.get(1)).wait(63));

	// droplet_01
	this.instance_16 = new lib.spray_01_nstd();
	this.instance_16.setTransform(138.5,234.9,1,1,90,0,0,16.5,8.5);
	this.instance_16.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({x:118.5,y:264.9,alpha:1},17,cjs.Ease.get(1)).wait(64));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,399,305.4);


(lib.bar_green_irobot = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.logo_irobot();
	this.instance.setTransform(225.9,26.5,1.013,1.01,0,0,0,55.1,10.4);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance.cache(-2,-2,115,25);

	this.instance_1 = new lib.bar_green();
	this.instance_1.setTransform(150,25.5,1,1,0,0,0,150,25.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,51);


(lib.spray_03_slow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_145 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(145).call(this.frame_145).wait(3));

	// spray_03_nstd_loop
	this.instance = new lib.spray_03_nstd_loop_slow();
	this.instance.setTransform(27,2,1,1,0,0,0,27,2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(130).to({_off:false},0).wait(18));

	// spray_03_nstd_loop
	this.instance_1 = new lib.spray_03_nstd_loop_slow();
	this.instance_1.setTransform(23.5,3,0.927,1.041,0,16.2,180,27,2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(117).to({_off:false},0).wait(31));

	// spray_03_nstd_loop
	this.instance_2 = new lib.spray_03_nstd_loop_slow();
	this.instance_2.setTransform(27,2,1,1,0,0,0,27,2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(104).to({_off:false},0).wait(44));

	// spray_03_nstd_loop
	this.instance_3 = new lib.spray_03_nstd_loop_slow();
	this.instance_3.setTransform(23.5,3,0.927,1.041,0,16.2,180,27,2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(91).to({_off:false},0).wait(57));

	// spray_03_nstd_loop
	this.instance_4 = new lib.spray_03_nstd_loop_slow();
	this.instance_4.setTransform(26,13,1,1,0,0,0,27,2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(78).to({_off:false},0).wait(70));

	// spray_03_nstd_loop
	this.instance_5 = new lib.spray_03_nstd_loop_slow();
	this.instance_5.setTransform(27,2,1,1,0,0,0,27,2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(65).to({_off:false},0).wait(83));

	// spray_03_nstd_loop
	this.instance_6 = new lib.spray_03_nstd_loop_slow();
	this.instance_6.setTransform(23.5,3,0.927,1.041,0,16.2,180,27,2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(52).to({_off:false},0).wait(96));

	// spray_03_nstd_loop
	this.instance_7 = new lib.spray_03_nstd_loop_slow();
	this.instance_7.setTransform(26,11,1,1,0,0,0,27,2);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(39).to({_off:false},0).wait(109));

	// spray_03_nstd_loop
	this.instance_8 = new lib.spray_03_nstd_loop_slow();
	this.instance_8.setTransform(23.5,3,0.927,1.041,0,16.2,180,27,2);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(26).to({_off:false},0).wait(122));

	// spray_03_nstd_loop
	this.instance_9 = new lib.spray_03_nstd_loop_slow();
	this.instance_9.setTransform(26,11,1,1,0,0,0,27,2);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(13).to({_off:false},0).wait(135));

	// spray_03_nstd_loop
	this.instance_10 = new lib.spray_03_nstd_loop_slow();
	this.instance_10.setTransform(18.5,20.2,1,1,0,0,0,18.5,20.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(148));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-345,-291,1038,1154);


(lib.braava_spray_slow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_109 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(109).call(this.frame_109).wait(17));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A2GJbQkmgfjNgHIaLysIB4AAIfwRrQhdgTgZgCQhmgMiCALQhdAHiyAYQiWAUhDACQjAAGj5ArQj7Asi4ABQj+gOjNAEQjNAEkrALQhAAChCAAQj0AAkVgdg");
	mask.setTransform(214.5,198.7);

	// spray_01
	this.instance = new lib.spray_01_slow();
	this.instance.setTransform(207.2,125.4,0.81,1,0,-44.8,135.2,22.2,30.2);
	this.instance.alpha = 0.301;
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(63).to({_off:false},0).to({_off:true},55).wait(8));

	// spray_01
	this.instance_1 = new lib.spray_01_slow();
	this.instance_1.setTransform(194.2,126.5,0.81,1,0,-54.8,125.2,22.3,30.2);
	this.instance_1.alpha = 0.301;
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(16).to({_off:false},0).to({_off:true},102).wait(8));

	// spray_01
	this.instance_2 = new lib.spray_01_slow();
	this.instance_2.setTransform(249.1,85,1,1.281,50,0,0,22.9,-0.4);
	this.instance_2.alpha = 0.301;
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(52).to({_off:false},0).to({_off:true},66).wait(8));

	// spray_01
	this.instance_3 = new lib.spray_01_slow();
	this.instance_3.setTransform(190.8,117.7,1,1,50,0,0,22.9,-0.4);
	this.instance_3.alpha = 0.602;

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},118).wait(8));

	// spray_01
	this.instance_4 = new lib.spray_01_slow();
	this.instance_4.setTransform(187.2,135.4,0.81,1,0,-44.8,135.2,22.2,30.2);
	this.instance_4.alpha = 0.301;
	this.instance_4._off = true;

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(44).to({_off:false},0).to({_off:true},74).wait(8));

	// spray_01
	this.instance_5 = new lib.spray_01_slow();
	this.instance_5.setTransform(240.8,77.7,1,1.281,50,0,0,22.9,-0.4);
	this.instance_5.alpha = 0.301;
	this.instance_5._off = true;

	this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(72).to({_off:false},0).to({_off:true},46).wait(8));

	// spray_01
	this.instance_6 = new lib.spray_01_slow();
	this.instance_6.setTransform(240.8,77.7,1,1.281,50,0,0,22.9,-0.4);
	this.instance_6.alpha = 0.301;
	this.instance_6._off = true;

	this.instance_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(32).to({_off:false},0).to({_off:true},86).wait(8));

	// spray_03
	this.instance_7 = new lib.spray_03_slow();
	this.instance_7.setTransform(184.9,131.9,1.108,4.286,0,-54.9,180,26.4,-2.9);
	this.instance_7.alpha = 0.25;
	this.instance_7._off = true;

	this.instance_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(11).to({_off:false},0).to({_off:true},110).wait(5));

	// spray_03
	this.instance_8 = new lib.spray_03_slow();
	this.instance_8.setTransform(189.2,131.9,1.358,3.199,0,-39.7,0,26.4,-2.9);
	this.instance_8.alpha = 0.25;
	this.instance_8._off = true;

	this.instance_8.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(24).to({_off:false},0).wait(102));

	// spray_03
	this.instance_9 = new lib.spray_03_slow();
	this.instance_9.setTransform(194.1,131.9,3.755,2.486,0,-8,0,26.4,-2.9);
	this.instance_9.alpha = 0.25;
	this.instance_9._off = true;

	this.instance_9.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(16).to({_off:false},0).to({_off:true},102).wait(8));

	// spray_03
	this.instance_10 = new lib.spray_03_slow();
	this.instance_10.setTransform(198.4,131.9,1.632,2.765,0,27.1,180,26.3,-2.9);
	this.instance_10.alpha = 0.25;
	this.instance_10._off = true;

	this.instance_10.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(8).to({_off:false},0).to({_off:true},110).wait(8));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("A4QI0QjngdirgoIa4xAIB5AAMAgUAQEQhRgOkxAWQkpAViyAfQjEAijqATQkQAVi8gOQkCgeiZgGQkKgLk3A6QiXAci9AAQjCAAjqgeg");
	mask_1.setTransform(214.1,194.9);

	// spray_03
	this.instance_11 = new lib.spray_03_slow();
	this.instance_11.setTransform(183.1,131.9,1.358,4.82,0,-59.3,0,26.4,-2.9);
	this.instance_11.alpha = 0.25;
	this.instance_11._off = true;

	this.instance_11.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(6).to({_off:false},0).to({_off:true},114).wait(6));

	// spray_03
	this.instance_12 = new lib.spray_03_slow();
	this.instance_12.setTransform(187,131.9,1.358,3.708,0,-48.4,0,26.4,-2.9);
	this.instance_12.alpha = 0.25;
	this.instance_12._off = true;

	this.instance_12.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(16).to({_off:false},0).to({_off:true},106).wait(4));

	// spray_03
	this.instance_13 = new lib.spray_03_slow();
	this.instance_13.setTransform(191.9,131.9,1.313,2.721,0,-25.2,180,26.3,-2.9);
	this.instance_13.alpha = 0.25;
	this.instance_13._off = true;

	this.instance_13.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(20).to({_off:false},0).to({_off:true},98).wait(8));

	// spray_03
	this.instance_14 = new lib.spray_03_slow();
	this.instance_14.setTransform(195.8,131.9,1.358,2.486,0,7.9,0,26.2,-2.9);
	this.instance_14.alpha = 0.25;
	this.instance_14._off = true;

	this.instance_14.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(12).to({_off:false},0).to({_off:true},106).wait(8));

	// spray_03
	this.instance_15 = new lib.spray_03_slow();
	this.instance_15.setTransform(200.5,131.9,1.358,3.148,0,38.5,0,26.2,-2.9);
	this.instance_15.alpha = 0.25;
	this.instance_15._off = true;

	this.instance_15.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(4).to({_off:false},0).to({_off:true},114).wait(8));

	// spray_03
	this.instance_16 = new lib.spray_03_slow();
	this.instance_16.setTransform(202.9,131.9,1.358,3.723,0,48.6,0,26.2,-2.9);
	this.instance_16.alpha = 0.25;

	this.instance_16.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({_off:true},118).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-356.1,-338.1,1822.5,1258.3);


(lib.braava_section_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_113 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(113).call(this.frame_113).wait(8));

	// braava_clean_light
	this.instance = new lib.braava_clean_light();
	this.instance.setTransform(108.8,210.8,0.575,0.27,0,71.4,5.9,5.1,5.2);
	this.instance.alpha = 0;
	this.instance.shadow = new cjs.Shadow("rgba(26,162,220,1)",0,0,6);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).to({alpha:0},10).to({alpha:1},10).to({alpha:0},9).to({alpha:1},10).to({alpha:0},9).to({_off:true},1).wait(63));

	// braava_spray
	this.instance_1 = new lib.braava_spray();
	this.instance_1.setTransform(116.7,223.8,0.057,0.193,0,-59.6,-15.6,183.7,105.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(38).to({_off:false},0).wait(15).to({alpha:1},0).wait(68));

	// braava_spray
	this.instance_2 = new lib.braava_spray_slow();
	this.instance_2.setTransform(116.7,223.8,0.057,0.193,0,-59.6,-15.6,183.7,105.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},53).wait(68));

	// braava
	this.braava_robot = new lib.braava_robot_med();
	this.braava_robot.setTransform(104.8,223.8,0.239,0.239,0,0,0,115.5,76);
	this.braava_robot._off = true;

	this.timeline.addTween(cjs.Tween.get(this.braava_robot).wait(53).to({_off:false},0).wait(23).to({x:176.3,y:233.6},30,cjs.Ease.get(-1)).wait(15));

	// braava
	this.braava_robot_1 = new lib.braava_robot_lg();
	this.braava_robot_1.setTransform(104.8,223.8,0.239,0.239,0,0,0,115.5,76);

	this.timeline.addTween(cjs.Tween.get(this.braava_robot_1).to({_off:true},53).wait(68));

	// braava_shadow_01
	this.instance_3 = new lib.braava_shadow_01();
	this.instance_3.setTransform(126,234,0.299,0.466,0,-80.3,-27.5,50,49.9);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:0.199},17).wait(57).to({alpha:0},15).to({_off:true},1).wait(31));

	// braava_shadow_01
	this.instance_4 = new lib.braava_shadow_01();
	this.instance_4.setTransform(126,234,0.299,0.466,0,-80.3,-27.5,50,49.9);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(121));

	// braava_droplets
	this.instance_5 = new lib.braava_droplets();
	this.instance_5.setTransform(124.3,229.3,0.057,0.105,0,-59.6,-15.6,183.3,105.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(38).to({_off:false},0).wait(15).to({alpha:0.301},0).wait(68));

	// braava_droplets
	this.instance_6 = new lib.braava_droplets_slow();
	this.instance_6.setTransform(124.3,229.3,0.057,0.105,0,-59.6,-15.6,183.3,105.5);
	this.instance_6.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},53).wait(68));

	// background_mid
	this.instance_7 = new lib.background_mid();
	this.instance_7.setTransform(150.1,128.9,1,1,0,0,0,150.1,128.9);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(49).to({_off:false},0).wait(72));

	// background_close
	this.instance_8 = new lib.background_close();
	this.instance_8.setTransform(111,228,0.242,0.242,0,0,0,150,124.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},49).wait(72));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,258.3);


(lib.braava_section_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_119 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(119).call(this.frame_119).wait(5));

	// braava_spray
	this.instance = new lib.braava_spray();
	this.instance.setTransform(77.4,200.3,0.074,0.251,0,-59.6,-15.6,183.7,105.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).wait(110));

	// braava_robot_med
	this.instance_1 = new lib.braava_robot_med();
	this.instance_1.setTransform(58.7,200.1,0.332,0.332,0,0,0,115.6,76);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(124));

	// braava_shadow_01
	this.instance_2 = new lib.braava_shadow_01();
	this.instance_2.setTransform(89.2,215,0.422,0.657,0,-80.3,-27.5,49.9,50);
	this.instance_2.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(124));

	// braava_droplets
	this.instance_3 = new lib.braava_droplets();
	this.instance_3.setTransform(87.3,207.5,0.074,0.137,0,-59.6,-15.6,183.3,105.7);
	this.instance_3.alpha = 0.301;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).wait(110));

	// background_mid
	this.instance_4 = new lib.background_mid();
	this.instance_4.setTransform(122.1,68.8,1.404,1.404,0,0,0,150.1,128.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(124));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.6,-112.2,421.2,362.3);


// stage content:
(lib._300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var frequency=24;
		stage.enableMouseOver(frequency);
		
		/* cta */
		
		canvas.addEventListener("mouseover",         
		    ctaOverHandler.bind(this));
		
		function ctaOverHandler()
		{
		    this.button_cta.gotoAndPlay("over");
		}
		
		canvas.addEventListener("mouseout",         
		    ctaOutHandler.bind(this));
		
		function ctaOutHandler()
		{
		    this.button_cta.gotoAndPlay("out");
		}
	}
	this.frame_340 = function() {
		this.button_cta.gotoAndPlay("over");
	}
	this.frame_377 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(340).call(this.frame_340).wait(37).call(this.frame_377).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#756667").s().p("A3bTiMAAAgnDMAu2AAAMAAAAnDgA3RTYMAuiAAAMAAAgmvMguiAAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(378));

	// braava_top
	this.instance = new lib.braava_top();
	this.instance.setTransform(386,151,1,1,0,0,0,86,89);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(270).to({_off:false},0).wait(1).to({regX:33.5,regY:86,x:333.2,y:148},0).wait(1).to({x:331.8},0).wait(1).to({x:328.4},0).wait(1).to({x:321.9},0).wait(1).to({x:315.9},0).wait(1).to({x:312.3},0).wait(1).to({x:310.1},0).wait(1).to({x:308.8},0).wait(1).to({x:308},0).wait(1).to({x:307.6},0).wait(1).to({regX:86,regY:89,x:360,y:151},0).wait(39).to({regX:33.5,regY:86,x:307.2,y:148},0).wait(1).to({x:306.3},0).wait(1).to({x:304.6},0).wait(1).to({x:302.2},0).wait(1).to({x:298.9},0).wait(1).to({x:294.6},0).wait(1).to({x:289.2},0).wait(1).to({x:282.5},0).wait(1).to({x:274.2},0).wait(1).to({x:264.2},0).wait(1).to({x:252.2},0).wait(1).to({x:237.9},0).wait(1).to({x:220.8},0).wait(1).to({x:200.8},0).wait(1).to({x:177.7},0).wait(1).to({x:152.1},0).wait(1).to({x:124.9},0).wait(1).to({x:98},0).wait(1).to({x:73},0).wait(1).to({x:50.9},0).wait(1).to({x:32.2},0).wait(1).to({x:16.7},0).wait(1).to({x:4.1},0).wait(1).to({x:-6.1},0).wait(1).to({x:-14.1},0).wait(1).to({x:-20.4},0).wait(1).to({x:-25.1},0).wait(1).to({x:-28.5},0).wait(1).to({x:-30.8},0).wait(1).to({x:-32},0).wait(1).to({regX:86,regY:89,x:20,y:151},0).wait(28));

	// mask_01 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_279 = new cjs.Graphics().p("A13TiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_319 = new cjs.Graphics().p("A13TiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_320 = new cjs.Graphics().p("A14TiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_graphics_321 = new cjs.Graphics().p("A19TiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_graphics_322 = new cjs.Graphics().p("A2GTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_graphics_323 = new cjs.Graphics().p("A2STiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_graphics_324 = new cjs.Graphics().p("A2kTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_graphics_325 = new cjs.Graphics().p("A27TiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_graphics_326 = new cjs.Graphics().p("A3XTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_graphics_327 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_328 = new cjs.Graphics().p("A3aTiMAAAgnDMAu1AAAMAAAAnDg");
	var mask_graphics_329 = new cjs.Graphics().p("A3aTiMAAAgnDMAu1AAAMAAAAnDg");
	var mask_graphics_330 = new cjs.Graphics().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_graphics_331 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_332 = new cjs.Graphics().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_graphics_333 = new cjs.Graphics().p("A3aTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_graphics_334 = new cjs.Graphics().p("A3aTiMAAAgnDMAu1AAAMAAAAnDg");
	var mask_graphics_335 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_336 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_337 = new cjs.Graphics().p("A3aTiMAAAgnDMAu1AAAMAAAAnDg");
	var mask_graphics_338 = new cjs.Graphics().p("A3aTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_graphics_339 = new cjs.Graphics().p("A3aTiMAAAgnDMAu1AAAMAAAAnDg");
	var mask_graphics_340 = new cjs.Graphics().p("A3aTiMAAAgnDMAu1AAAMAAAAnDg");
	var mask_graphics_341 = new cjs.Graphics().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_graphics_342 = new cjs.Graphics().p("A3hTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_graphics_343 = new cjs.Graphics().p("A4XTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_graphics_344 = new cjs.Graphics().p("A5BTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_graphics_345 = new cjs.Graphics().p("A5jTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_graphics_346 = new cjs.Graphics().p("A58TiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_graphics_347 = new cjs.Graphics().p("A6OTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_graphics_348 = new cjs.Graphics().p("A6aTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_graphics_349 = new cjs.Graphics().p("A6gTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_graphics_350 = new cjs.Graphics().p("A6jTiMAAAgnDMAu3AAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(279).to({graphics:mask_graphics_279,x:160,y:125}).wait(40).to({graphics:mask_graphics_319,x:160,y:125}).wait(1).to({graphics:mask_graphics_320,x:159.8,y:125}).wait(1).to({graphics:mask_graphics_321,x:159.4,y:125}).wait(1).to({graphics:mask_graphics_322,x:158.5,y:125}).wait(1).to({graphics:mask_graphics_323,x:157.2,y:125}).wait(1).to({graphics:mask_graphics_324,x:155.5,y:125}).wait(1).to({graphics:mask_graphics_325,x:153.2,y:125}).wait(1).to({graphics:mask_graphics_326,x:150.3,y:125}).wait(1).to({graphics:mask_graphics_327,x:143.5,y:125}).wait(1).to({graphics:mask_graphics_328,x:134.8,y:125}).wait(1).to({graphics:mask_graphics_329,x:124.2,y:125}).wait(1).to({graphics:mask_graphics_330,x:111.5,y:125}).wait(1).to({graphics:mask_graphics_331,x:96.3,y:125}).wait(1).to({graphics:mask_graphics_332,x:78.2,y:125}).wait(1).to({graphics:mask_graphics_333,x:57,y:125}).wait(1).to({graphics:mask_graphics_334,x:32.6,y:125}).wait(1).to({graphics:mask_graphics_335,x:5.4,y:125}).wait(1).to({graphics:mask_graphics_336,x:-23.3,y:125}).wait(1).to({graphics:mask_graphics_337,x:-51.8,y:125}).wait(1).to({graphics:mask_graphics_338,x:-78.3,y:125}).wait(1).to({graphics:mask_graphics_339,x:-101.7,y:125}).wait(1).to({graphics:mask_graphics_340,x:-121.5,y:125}).wait(1).to({graphics:mask_graphics_341,x:-137.9,y:125}).wait(1).to({graphics:mask_graphics_342,x:-150.6,y:125}).wait(1).to({graphics:mask_graphics_343,x:-156,y:125}).wait(1).to({graphics:mask_graphics_344,x:-160.3,y:125}).wait(1).to({graphics:mask_graphics_345,x:-163.6,y:125}).wait(1).to({graphics:mask_graphics_346,x:-166.1,y:125}).wait(1).to({graphics:mask_graphics_347,x:-167.9,y:125}).wait(1).to({graphics:mask_graphics_348,x:-169.1,y:125}).wait(1).to({graphics:mask_graphics_349,x:-169.8,y:125}).wait(1).to({graphics:mask_graphics_350,x:-170,y:125}).wait(28));

	// braava_spray_blue
	this.instance_1 = new lib.braava_spray_blue();
	this.instance_1.setTransform(318.4,137,0.406,0.991,0,90,91.5,183.5,105.8);
	this.instance_1.alpha = 0.5;
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(279).to({_off:false},0).to({_off:true},71).wait(28));

	// braava_droplets
	this.instance_2 = new lib.braava_droplets();
	this.instance_2.setTransform(318.5,137,0.282,0.991,0,90,91.5,183.6,105.8);
	this.instance_2.alpha = 0.5;
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(279).to({_off:false},0).to({_off:true},71).wait(28));

	// braava_spray_specks
	this.instance_3 = new lib.braava_spray_specks();
	this.instance_3.setTransform(318.5,137,0.282,0.751,90,0,0,183.5,105.8);
	this.instance_3.alpha = 0.699;
	this.instance_3._off = true;

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(279).to({_off:false},0).to({_off:true},71).wait(28));

	// button_cta
	this.button_cta = new lib.button_cta();
	this.button_cta.setTransform(337.5,9.5,1,1,0,0,0,37.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.button_cta).wait(336).to({x:37.5},0).wait(42));

	// logo_braava_jet
	this.instance_4 = new lib.logo_braava_jet();
	this.instance_4.setTransform(246.6,123.2,2.12,2.106,0,0,0,51.7,11);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(336).to({_off:false},0).wait(42));

	// text_07
	this.instance_5 = new lib.text_07();
	this.instance_5.setTransform(198,140.5,1,1,0,0,0,63,10.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(336).to({_off:false},0).wait(42));

	// bar_green_irobot
	this.instance_6 = new lib.bar_green_irobot();
	this.instance_6.setTransform(150,-26.5,1,1,0,0,0,150,25.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(336).to({_off:false},0).to({y:25.5},14,cjs.Ease.get(1)).wait(28));

	// mask_01 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_283 = new cjs.Graphics().p("A13TiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_1_graphics_319 = new cjs.Graphics().p("A13TiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_1_graphics_320 = new cjs.Graphics().p("A14TiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_1_graphics_321 = new cjs.Graphics().p("A19TiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_1_graphics_322 = new cjs.Graphics().p("A2GTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_1_graphics_323 = new cjs.Graphics().p("A2STiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_1_graphics_324 = new cjs.Graphics().p("A2kTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_1_graphics_325 = new cjs.Graphics().p("A27TiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_1_graphics_326 = new cjs.Graphics().p("A3XTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_1_graphics_327 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_1_graphics_328 = new cjs.Graphics().p("A3aTiMAAAgnDMAu1AAAMAAAAnDg");
	var mask_1_graphics_329 = new cjs.Graphics().p("A3aTiMAAAgnDMAu1AAAMAAAAnDg");
	var mask_1_graphics_330 = new cjs.Graphics().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_1_graphics_331 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_1_graphics_332 = new cjs.Graphics().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_1_graphics_333 = new cjs.Graphics().p("A3aTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_1_graphics_334 = new cjs.Graphics().p("A3aTiMAAAgnDMAu1AAAMAAAAnDg");
	var mask_1_graphics_335 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_1_graphics_336 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_1_graphics_337 = new cjs.Graphics().p("A3aTiMAAAgnDMAu1AAAMAAAAnDg");
	var mask_1_graphics_338 = new cjs.Graphics().p("A3aTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_1_graphics_339 = new cjs.Graphics().p("A3aTiMAAAgnDMAu1AAAMAAAAnDg");
	var mask_1_graphics_340 = new cjs.Graphics().p("A3aTiMAAAgnDMAu1AAAMAAAAnDg");
	var mask_1_graphics_341 = new cjs.Graphics().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_1_graphics_342 = new cjs.Graphics().p("A3hTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_1_graphics_343 = new cjs.Graphics().p("A4XTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_1_graphics_344 = new cjs.Graphics().p("A5BTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_1_graphics_345 = new cjs.Graphics().p("A5jTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_1_graphics_346 = new cjs.Graphics().p("A58TiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_1_graphics_347 = new cjs.Graphics().p("A6OTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_1_graphics_348 = new cjs.Graphics().p("A6aTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_1_graphics_349 = new cjs.Graphics().p("A6gTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_1_graphics_350 = new cjs.Graphics().p("A6jTiMAAAgnDMAu3AAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(283).to({graphics:mask_1_graphics_283,x:160,y:125}).wait(36).to({graphics:mask_1_graphics_319,x:160,y:125}).wait(1).to({graphics:mask_1_graphics_320,x:159.8,y:125}).wait(1).to({graphics:mask_1_graphics_321,x:159.4,y:125}).wait(1).to({graphics:mask_1_graphics_322,x:158.5,y:125}).wait(1).to({graphics:mask_1_graphics_323,x:157.2,y:125}).wait(1).to({graphics:mask_1_graphics_324,x:155.5,y:125}).wait(1).to({graphics:mask_1_graphics_325,x:153.2,y:125}).wait(1).to({graphics:mask_1_graphics_326,x:150.3,y:125}).wait(1).to({graphics:mask_1_graphics_327,x:143.5,y:125}).wait(1).to({graphics:mask_1_graphics_328,x:134.8,y:125}).wait(1).to({graphics:mask_1_graphics_329,x:124.2,y:125}).wait(1).to({graphics:mask_1_graphics_330,x:111.5,y:125}).wait(1).to({graphics:mask_1_graphics_331,x:96.3,y:125}).wait(1).to({graphics:mask_1_graphics_332,x:78.2,y:125}).wait(1).to({graphics:mask_1_graphics_333,x:57,y:125}).wait(1).to({graphics:mask_1_graphics_334,x:32.6,y:125}).wait(1).to({graphics:mask_1_graphics_335,x:5.4,y:125}).wait(1).to({graphics:mask_1_graphics_336,x:-23.3,y:125}).wait(1).to({graphics:mask_1_graphics_337,x:-51.8,y:125}).wait(1).to({graphics:mask_1_graphics_338,x:-78.3,y:125}).wait(1).to({graphics:mask_1_graphics_339,x:-101.7,y:125}).wait(1).to({graphics:mask_1_graphics_340,x:-121.5,y:125}).wait(1).to({graphics:mask_1_graphics_341,x:-137.9,y:125}).wait(1).to({graphics:mask_1_graphics_342,x:-150.6,y:125}).wait(1).to({graphics:mask_1_graphics_343,x:-156,y:125}).wait(1).to({graphics:mask_1_graphics_344,x:-160.3,y:125}).wait(1).to({graphics:mask_1_graphics_345,x:-163.6,y:125}).wait(1).to({graphics:mask_1_graphics_346,x:-166.1,y:125}).wait(1).to({graphics:mask_1_graphics_347,x:-167.9,y:125}).wait(1).to({graphics:mask_1_graphics_348,x:-169.1,y:125}).wait(1).to({graphics:mask_1_graphics_349,x:-169.8,y:125}).wait(1).to({graphics:mask_1_graphics_350,x:-170,y:125}).wait(28));

	// text_06
	this.instance_7 = new lib.text_06();
	this.instance_7.setTransform(-132.5,106,1,1,0,0,0,124.5,47);
	this.instance_7._off = true;

	this.instance_7.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(266).to({_off:false},0).wait(1).to({regX:127.5,regY:66.5,x:-127.8,y:125.5},0).wait(1).to({x:-122},0).wait(1).to({x:-109.7},0).wait(1).to({x:-87},0).wait(1).to({x:-47.8},0).wait(1).to({x:4.9},0).wait(1).to({x:50.5},0).wait(1).to({x:82.5},0).wait(1).to({x:104.6},0).wait(1).to({x:120.2},0).wait(1).to({x:131.3},0).wait(1).to({x:139.2},0).wait(1).to({x:144.6},0).wait(1).to({x:148},0).wait(1).to({x:149.9},0).wait(1).to({regX:124.5,regY:47,x:147.5,y:106},0).wait(1).to({_off:true},67).wait(28));

	// box_white
	this.instance_8 = new lib.box_white();
	this.instance_8.setTransform(-150,125,1,1,0,0,0,150,125);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(266).to({_off:false},0).wait(1).to({x:-148.2},0).wait(1).to({x:-141.9},0).wait(1).to({x:-128.8},0).wait(1).to({x:-104.4},0).wait(1).to({x:-62.4},0).wait(1).to({x:-6},0).wait(1).to({x:42.9},0).wait(1).to({x:77.1},0).wait(1).to({x:100.8},0).wait(1).to({x:117.5},0).wait(1).to({x:129.4},0).wait(1).to({x:137.9},0).wait(1).to({x:143.7},0).wait(1).to({x:147.4},0).wait(1).to({x:149.4},0).wait(1).to({x:150},0).wait(96));

	// logo_lockup_corner
	this.instance_9 = new lib.logo_lockup_corner();
	this.instance_9.setTransform(252,216,1,1,0,0,0,38,23);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true},283).wait(95));

	// text_05
	this.instance_10 = new lib.text_05();
	this.instance_10.setTransform(169,161.5,1,1,0,0,0,68,23.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(219).to({_off:false},0).wait(1).to({regX:48,regY:11.5,x:149,y:149.3},0).wait(1).to({y:148.5},0).wait(1).to({y:146.8},0).wait(1).to({y:143.4},0).wait(1).to({y:139},0).wait(1).to({y:135.3},0).wait(1).to({y:132.4},0).wait(1).to({y:130.1},0).wait(1).to({y:128.3},0).wait(1).to({y:126.9},0).wait(1).to({y:125.6},0).wait(1).to({y:124.6},0).wait(1).to({y:123.7},0).wait(1).to({y:123},0).wait(1).to({y:122.3},0).wait(1).to({y:121.8},0).wait(1).to({y:121.3},0).wait(1).to({y:120.9},0).wait(1).to({y:120.6},0).wait(1).to({y:120.3},0).wait(1).to({y:120.1},0).wait(1).to({y:119.9},0).wait(1).to({y:119.7},0).wait(1).to({y:119.6},0).wait(2).to({y:119.5},0).wait(1).to({regX:68,regY:23.5,x:169,y:131.5},0).to({_off:true},37).wait(95));

	// text_04
	this.instance_11 = new lib.text_04();
	this.instance_11.setTransform(188,84.5,1,1,0,0,0,142,16.5);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(219).to({_off:false},0).to({_off:true},64).wait(95));

	// bar_white
	this.instance_12 = new lib.bar_white();
	this.instance_12.setTransform(296.5,82.5,1,1,0,0,0,15.5,1.5);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(219).to({_off:false},0).wait(1).to({x:296.2},0).wait(1).to({x:295.1},0).wait(1).to({x:292.3},0).wait(1).to({x:288.4},0).wait(1).to({x:285.5},0).wait(1).to({x:283.4},0).wait(1).to({x:281.9},0).wait(1).to({x:280.7},0).wait(1).to({x:279.8},0).wait(1).to({x:279.1},0).wait(1).to({x:278.5},0).wait(1).to({x:278},0).wait(1).to({x:277.6},0).wait(1).to({x:277.2},0).wait(1).to({x:277},0).wait(1).to({x:276.8},0).wait(1).to({x:276.7},0).wait(1).to({x:276.6},0).wait(1).to({x:276.5},0).wait(1).to({_off:true},44).wait(95));

	// bar_white
	this.instance_13 = new lib.bar_white();
	this.instance_13.setTransform(3.5,82.5,1,1,0,0,0,15.5,1.5);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(219).to({_off:false},0).wait(1).to({x:3.8},0).wait(1).to({x:4.9},0).wait(1).to({x:7.7},0).wait(1).to({x:11.6},0).wait(1).to({x:14.5},0).wait(1).to({x:16.6},0).wait(1).to({x:18.1},0).wait(1).to({x:19.3},0).wait(1).to({x:20.2},0).wait(1).to({x:20.9},0).wait(1).to({x:21.5},0).wait(1).to({x:22},0).wait(1).to({x:22.4},0).wait(1).to({x:22.8},0).wait(1).to({x:23},0).wait(1).to({x:23.2},0).wait(1).to({x:23.3},0).wait(1).to({x:23.4},0).wait(1).to({x:23.5},0).wait(1).to({_off:true},44).wait(95));

	// box_blue_01
	this.instance_14 = new lib.box_blue_01();
	this.instance_14.setTransform(150,98.5,1,0.028,0,0,0,150,58.5);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(219).to({_off:false},0).wait(1).to({regY:57.5,scaleY:0.05,y:98.4},0).wait(1).to({scaleY:0.14,y:98.3},0).wait(1).to({scaleY:0.33,y:98.1},0).wait(1).to({scaleY:0.46,y:98},0).wait(1).to({scaleY:0.55,y:97.9},0).wait(1).to({scaleY:0.61,y:97.8},0).wait(1).to({scaleY:0.65},0).wait(1).to({scaleY:0.69,y:97.7},0).wait(1).to({scaleY:0.71},0).wait(1).to({scaleY:0.73},0).wait(1).to({scaleY:0.74},0).wait(1).to({scaleY:0.75},0).wait(1).to({scaleY:0.76},0).wait(1).to({scaleY:0.76},0).wait(1).to({regY:58,scaleY:0.77,y:98.4},0).to({_off:true},49).wait(95));

	// box_white
	this.instance_15 = new lib.box_white();
	this.instance_15.setTransform(150,-125,1,1,0,0,0,150,125);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(215).to({_off:false},0).wait(1).to({y:-111.5},0).wait(1).to({y:-41},0).wait(1).to({y:25.2},0).wait(1).to({y:61.7},0).wait(1).to({y:84.6},0).wait(1).to({y:99.9},0).wait(1).to({y:110.4},0).wait(1).to({y:117.5},0).wait(1).to({y:121.9},0).wait(1).to({y:124.3},0).wait(1).to({y:125},0).to({_off:true},57).wait(95));

	// box_white (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_120 = new cjs.Graphics().p("A3bSwMAAAgnDMAu2AAAMAAAAnDg");
	var mask_2_graphics_134 = new cjs.Graphics().p("A3bThMAAAgnCMAu2AAAMAAAAnCg");
	var mask_2_graphics_135 = new cjs.Graphics().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_2_graphics_136 = new cjs.Graphics().p("A3bThMAAAgnCMAu2AAAMAAAAnCg");
	var mask_2_graphics_137 = new cjs.Graphics().p("A3bTiMAAAgnCMAu2AAAMAAAAnCg");
	var mask_2_graphics_138 = new cjs.Graphics().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_2_graphics_139 = new cjs.Graphics().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_2_graphics_140 = new cjs.Graphics().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_2_graphics_141 = new cjs.Graphics().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_2_graphics_142 = new cjs.Graphics().p("A3bTiMAAAgnCMAu2AAAMAAAAnCg");
	var mask_2_graphics_143 = new cjs.Graphics().p("A3bThMAAAgnCMAu2AAAMAAAAnCg");
	var mask_2_graphics_144 = new cjs.Graphics().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(120).to({graphics:mask_2_graphics_120,x:150,y:-130}).wait(14).to({graphics:mask_2_graphics_134,x:150,y:-105}).wait(1).to({graphics:mask_2_graphics_135,x:150,y:-61.3}).wait(1).to({graphics:mask_2_graphics_136,x:150,y:-22.2}).wait(1).to({graphics:mask_2_graphics_137,x:150,y:12.3}).wait(1).to({graphics:mask_2_graphics_138,x:150,y:42.2}).wait(1).to({graphics:mask_2_graphics_139,x:150,y:67.5}).wait(1).to({graphics:mask_2_graphics_140,x:150,y:88.2}).wait(1).to({graphics:mask_2_graphics_141,x:150,y:104.3}).wait(1).to({graphics:mask_2_graphics_142,x:150,y:115.8}).wait(1).to({graphics:mask_2_graphics_143,x:150,y:122.7}).wait(1).to({graphics:mask_2_graphics_144,x:150,y:125}).wait(86).to({graphics:null,x:0,y:0}).wait(148));

	// corner_highlight
	this.instance_16 = new lib.corner_highlight();
	this.instance_16.setTransform(199.3,146.7,1,1,0,0,0,100.8,103.2);
	this.instance_16.compositeOperation = "lighter";
	this.instance_16._off = true;

	this.instance_16.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(120).to({_off:false},0).to({_off:true},110).wait(148));

	// braava_section_02
	this.instance_17 = new lib.braava_section_02();
	this.instance_17.setTransform(94.4,-1.9,1,1,0,0,0,94.4,-1.9);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.instance_17.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(120).to({_off:false},0).wait(14).to({regX:105.9,regY:216.2,scaleX:4.43,scaleY:4.43,x:130.2,y:74.2,alpha:1},0).to({scaleX:4.22,scaleY:4.22},34).wait(1).to({regX:150,regY:129.1,scaleX:4.19,scaleY:4.19,x:314.7,y:-289.3},0).wait(1).to({scaleX:4.09,scaleY:4.09,x:309.7,y:-276.7},0).wait(1).to({scaleX:3.93,scaleY:3.93,x:301.3,y:-255.2},0).wait(1).to({scaleX:3.7,scaleY:3.7,x:289.4,y:-225.2},0).wait(1).to({scaleX:3.42,scaleY:3.42,x:274.9,y:-188.3},0).wait(1).to({scaleX:3.1,scaleY:3.1,x:258.5,y:-146.7},0).wait(1).to({scaleX:2.77,scaleY:2.77,x:241.5,y:-103.5},0).wait(1).to({scaleX:2.45,scaleY:2.45,x:224.8,y:-61.4},0).wait(1).to({scaleX:2.15,scaleY:2.15,x:209.5,y:-22.3},0).wait(1).to({scaleX:1.89,scaleY:1.89,x:195.8,y:12.4},0).wait(1).to({scaleX:1.66,scaleY:1.66,x:184,y:42.4},0).wait(1).to({scaleX:1.47,scaleY:1.47,x:174.1,y:67.3},0).wait(1).to({scaleX:1.32,scaleY:1.32,x:166.1,y:87.6},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:159.9,y:103.4},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:155.3,y:115.1},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:152.2,y:123},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:150.4,y:127.6},0).wait(1).to({regX:105.9,regY:216.2,scaleX:1,scaleY:1,x:105.7,y:216.1},0).to({_off:true},44).wait(148));

	// text_03
	this.instance_18 = new lib.text_03();
	this.instance_18.setTransform(207,155.5,1,1,0,0,0,123,35.5);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(69).to({_off:false},0).wait(1).to({regX:66,regY:26,x:150,y:145.8},0).wait(1).to({y:145.2},0).wait(1).to({y:143.8},0).wait(1).to({y:141},0).wait(1).to({y:137.3},0).wait(1).to({y:133.8},0).wait(1).to({y:131.2},0).wait(1).to({y:129.1},0).wait(1).to({y:127.4},0).wait(1).to({y:126.1},0).wait(1).to({y:124.9},0).wait(1).to({y:124},0).wait(1).to({y:123.2},0).wait(1).to({y:122.5},0).wait(1).to({y:121.9},0).wait(1).to({y:121.3},0).wait(1).to({y:120.9},0).wait(1).to({y:120.5},0).wait(1).to({y:120.2},0).wait(1).to({y:119.9},0).wait(1).to({y:119.7},0).wait(1).to({y:119.5},0).wait(1).to({y:119.3},0).wait(1).to({y:119.2},0).wait(1).to({y:119.1},0).wait(1).to({y:119},0).wait(2).to({regX:123,regY:35.5,x:207,y:128.5},0).wait(37).to({y:155.5},4,cjs.Ease.get(-1)).to({_off:true},1).wait(239));

	// text_01
	this.instance_19 = new lib.text_01();
	this.instance_19.setTransform(214.5,67.5,1,1,0,0,0,104.5,15.5);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(69).to({_off:false},0).to({_off:true},70).wait(239));

	// bar_white
	this.instance_20 = new lib.bar_white();
	this.instance_20.setTransform(234.5,66.5,1,1,0,0,0,15.5,1.5);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(69).to({_off:false},0).wait(1).to({x:234.3},0).wait(1).to({x:233.3},0).wait(1).to({x:230.8},0).wait(1).to({x:227.1},0).wait(1).to({x:224.1},0).wait(1).to({x:222},0).wait(1).to({x:220.4},0).wait(1).to({x:219.2},0).wait(1).to({x:218.2},0).wait(1).to({x:217.4},0).wait(1).to({x:216.8},0).wait(1).to({x:216.2},0).wait(1).to({x:215.8},0).wait(1).to({x:215.5},0).wait(1).to({x:215.2},0).wait(1).to({x:214.9},0).wait(1).to({x:214.8},0).wait(1).to({x:214.6},0).wait(2).to({x:214.5},0).wait(45).to({x:234.5},4,cjs.Ease.get(-1)).to({_off:true},1).wait(239));

	// bar_white
	this.instance_21 = new lib.bar_white();
	this.instance_21.setTransform(66.5,66.5,1,1,0,0,0,15.5,1.5);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(69).to({_off:false},0).wait(1).to({x:66.7},0).wait(1).to({x:67.7},0).wait(1).to({x:70.2},0).wait(1).to({x:73.9},0).wait(1).to({x:76.9},0).wait(1).to({x:79},0).wait(1).to({x:80.6},0).wait(1).to({x:81.8},0).wait(1).to({x:82.8},0).wait(1).to({x:83.6},0).wait(1).to({x:84.2},0).wait(1).to({x:84.8},0).wait(1).to({x:85.2},0).wait(1).to({x:85.5},0).wait(1).to({x:85.8},0).wait(1).to({x:86.1},0).wait(1).to({x:86.2},0).wait(1).to({x:86.4},0).wait(2).to({x:86.5},0).wait(45).to({x:66.5},4,cjs.Ease.get(-1)).to({_off:true},1).wait(239));

	// box_blue_01
	this.instance_22 = new lib.box_blue_01();
	this.instance_22.setTransform(152,98.1,1,0.035,0,0,0,152,58.4);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(69).to({_off:false},0).wait(1).to({regX:150,regY:57.5,scaleY:0.06,x:150,y:98},0).wait(1).to({scaleY:0.18},0).wait(1).to({scaleY:0.42,y:97.9},0).wait(1).to({scaleY:0.6},0).wait(1).to({scaleY:0.71,y:97.8},0).wait(1).to({scaleY:0.79},0).wait(1).to({scaleY:0.85},0).wait(1).to({scaleY:0.89},0).wait(1).to({scaleY:0.92},0).wait(1).to({scaleY:0.95},0).wait(1).to({scaleY:0.96},0).wait(1).to({scaleY:0.98,y:97.7},0).wait(1).to({scaleY:0.99,y:97.8},0).wait(1).to({scaleY:0.99},0).wait(1).to({regX:152,regY:59.1,scaleY:0.99,x:152,y:98.6},0).to({_off:true},55).wait(239));

	// box_white
	this.instance_23 = new lib.box_white();
	this.instance_23.setTransform(150,-125,1,1,0,0,0,150,125);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(65).to({_off:false},0).wait(1).to({y:-111.5},0).wait(1).to({y:-41},0).wait(1).to({y:25.2},0).wait(1).to({y:61.7},0).wait(1).to({y:84.6},0).wait(1).to({y:99.9},0).wait(1).to({y:110.4},0).wait(1).to({y:117.5},0).wait(1).to({y:121.9},0).wait(1).to({y:124.3},0).wait(1).to({y:125},0).to({_off:true},207).wait(95));

	// box_white (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_23 = new cjs.Graphics().p("A3bThMAAAgnCMAu2AAAMAAAAnCg");
	var mask_3_graphics_24 = new cjs.Graphics().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_3_graphics_25 = new cjs.Graphics().p("A3bThMAAAgnCMAu2AAAMAAAAnCg");
	var mask_3_graphics_26 = new cjs.Graphics().p("A3bTiMAAAgnCMAu2AAAMAAAAnCg");
	var mask_3_graphics_27 = new cjs.Graphics().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_3_graphics_28 = new cjs.Graphics().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_3_graphics_29 = new cjs.Graphics().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_3_graphics_30 = new cjs.Graphics().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_3_graphics_31 = new cjs.Graphics().p("A3bTiMAAAgnCMAu2AAAMAAAAnCg");
	var mask_3_graphics_32 = new cjs.Graphics().p("A3bThMAAAgnCMAu2AAAMAAAAnCg");
	var mask_3_graphics_33 = new cjs.Graphics().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(23).to({graphics:mask_3_graphics_23,x:150,y:-105}).wait(1).to({graphics:mask_3_graphics_24,x:150,y:-61.3}).wait(1).to({graphics:mask_3_graphics_25,x:150,y:-22.2}).wait(1).to({graphics:mask_3_graphics_26,x:150,y:12.3}).wait(1).to({graphics:mask_3_graphics_27,x:150,y:42.2}).wait(1).to({graphics:mask_3_graphics_28,x:150,y:67.5}).wait(1).to({graphics:mask_3_graphics_29,x:150,y:88.2}).wait(1).to({graphics:mask_3_graphics_30,x:150,y:104.3}).wait(1).to({graphics:mask_3_graphics_31,x:150,y:115.8}).wait(1).to({graphics:mask_3_graphics_32,x:150,y:122.7}).wait(1).to({graphics:mask_3_graphics_33,x:150,y:125}).wait(46).to({graphics:null,x:0,y:0}).wait(299));

	// corner_highlight
	this.instance_24 = new lib.corner_highlight();
	this.instance_24.setTransform(199.3,146.7,1,1,0,0,0,100.8,103.2);
	this.instance_24.compositeOperation = "lighter";
	this.instance_24._off = true;

	this.instance_24.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(23).to({_off:false},0).to({_off:true},56).wait(299));

	// braava_section_01
	this.instance_25 = new lib.braava_section_01();
	this.instance_25.setTransform(64,194,1,1,0,0,0,64,194);
	this.instance_25._off = true;

	this.instance_25.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(23).to({_off:false},0).to({scaleX:1.15,scaleY:1.15,x:70,y:190},55).to({_off:true},1).wait(299));

	// text_02
	this.instance_26 = new lib.text_02();
	this.instance_26.setTransform(183.5,108,1,1,0,0,0,116.5,23);

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(23).to({y:130},4,cjs.Ease.get(-1)).to({_off:true},1).wait(350));

	// text_01
	this.instance_27 = new lib.text_01();
	this.instance_27.setTransform(214.5,59.5,1,1,0,0,0,104.5,15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_27).to({_off:true},28).wait(350));

	// bar_white
	this.instance_28 = new lib.bar_white();
	this.instance_28.setTransform(214.5,58.5,1,1,0,0,0,15.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(23).to({x:234.5},4,cjs.Ease.get(-1)).to({_off:true},1).wait(350));

	// bar_white
	this.instance_29 = new lib.bar_white();
	this.instance_29.setTransform(86.5,58.5,1,1,0,0,0,15.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(23).to({x:66.5},4,cjs.Ease.get(-1)).to({_off:true},1).wait(350));

	// box_blue_01
	this.instance_30 = new lib.box_blue_01();
	this.instance_30.setTransform(149,88,1,1,0,0,0,149,55);

	this.timeline.addTween(cjs.Tween.get(this.instance_30).to({_off:true},28).wait(350));

	// box_white
	this.instance_31 = new lib.box_white();
	this.instance_31.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(378));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,125,569,250);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;