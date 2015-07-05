var renderer, scene, camera, pointCloud;

init();
animate();

function init() {

    // dom
    var container = document.getElementById( 'container' );

    // renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setClearColor( 0x000033 );
    container.appendChild( renderer.domElement );
    
    // scene
    scene = new THREE.Scene();

    //camera
    camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.z = 400;

    // point cloud geometry
    var geometry = new THREE.PlaneGeometry( 800, 800, 256, 256 );
    
    // vertex colors
    var colors = [];
    for( var i = 0; i < geometry.vertices.length; i++ ) {
    
        // random color
        colors[i] = new THREE.Color( 0x94118f );
        colors[i].offsetHSL( 0, (0.5 - Math.random()), (0.5 - Math.random()) );

    }
    geometry.colors = colors;

    // material
    material = new THREE.PointCloudMaterial( {
        size: 3,
        transparent: true,
        opacity: 0.7,
        vertexColors: THREE.VertexColors
    } );

    // point cloud
    pointCloud = new THREE.PointCloud( geometry, material );

	pointCloud.rotation.x += 0.9;
    pointCloud.rotation.y += 3;
    
    scene.add( pointCloud );

}

function animate() {

    requestAnimationFrame( animate );

    render();

}

function render() {

    // rotate
    // pointCloud.rotation.x += 0.005;
    // pointCloud.rotation.y += 0.0005;
    pointCloud.rotation.z += 0.01;

    // render
    renderer.render( scene, camera );

}

console.log('Foo');
