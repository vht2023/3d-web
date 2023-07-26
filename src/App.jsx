import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";


function App() {
    
    return (
        <Canvas shadows camera={{ position: [1, 3, 14], fov: 50 }}>
            <color attach="background" args={["#ececec"]} />
            <Experience />
        </Canvas>
    );
}

export default App;
