import React, { Component } from 'react';
import * as THREE from 'three';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';
import { PCDLoader } from 'three/examples/jsm/loaders/PCDLoader.js';
import pcd from '../data/VisualizeHelpers/data/MH_WHH_0294/measurements/1542604024995/pc/pc_MH_WHH_0294_1542604024995_107_021.pcd'; // Hard coded for now. Need to dynamically generate this in the future

class Visualize extends Component {
  componentDidMount() {
    // === THREE.JS CODE START ===

    var container, stats;
    var camera, controls, scene, renderer;
    init();
    animate();
    function init() {
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0x000000);
      camera = new THREE.PerspectiveCamera(
        15,
        window.innerWidth / window.innerHeight,
        0.01,
        40
      );
      camera.position.x = 0.4;
      camera.position.z = -2;
      camera.up.set(0, 0, 1);
      scene.add(camera);
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);
      var loader = new PCDLoader();
      loader.load(pcd, function(points) {
        scene.add(points);
        points.material.size *= 2;
        points.material.color.set('#7CFC00');
        var center = points.geometry.boundingSphere.center;
        controls.target.set(center.x, center.y, center.z);
        controls.update();
      });
      container = document.createElement('div');
      document.body.appendChild(container);
      container.appendChild(renderer.domElement);
      controls = new TrackballControls(camera, renderer.domElement);
      controls.rotateSpeed = 2.0;
      controls.zoomSpeed = 0.3;
      controls.panSpeed = 0.2;
      controls.noZoom = false;
      controls.noPan = false;
      controls.staticMoving = true;
      controls.dynamicDampingFactor = 0.3;
      controls.minDistance = 0.3;
      controls.maxDistance = 0.3 * 100;
      stats = new Stats();
      container.appendChild(stats.dom);
      window.addEventListener('resize', onWindowResize, false);
    }
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      controls.handleResize();
    }
    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
      stats.update();
    }
    // === THREE.JS EXAMPLE CODE END ===
  }
  render() {
    return <div />;
  }
}

export default Visualize;
