import React from 'react';
import PropTypes from 'prop-types';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';
import * as THREE from 'three';
import styles from './TorusKnot.scss';

let camera, scene, renderer;
let geometry, material, mesh;

function init() {

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 45;

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
    scene.fog = new THREE.Fog(new THREE.Color(0xdddddd), 45, 50);

    geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
    material = new THREE.MeshBasicMaterial({ wireframe: true, transparent: true, opacity: 0.55, color: 0x79bcde, fog: true });

    mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );

    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setSize( window.innerWidth, window.innerHeight);
    document.getElementById("legend").appendChild(renderer.domElement);
}

function animate() {
    requestAnimationFrame( animate );
    mesh.rotation.x += 0.001;
    mesh.rotation.y += 0.002;
    renderer.render( scene, camera );
}



function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}

class TorusKnot extends React.Component {
  componentDidMount() {
    init();
    animate();
    window.addEventListener('resize', onWindowResize, false);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', onWindowResize);
  }
  render() {
    return <div id="legend" className={styles.background} />;
  }
}

TorusKnot.propTypes = {
};

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(TorusKnot);
