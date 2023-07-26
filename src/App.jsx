import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";


function App() {
    
    return (
        <Canvas shadows camera={{ position: [1, 3, 10], fov: 20 }}>
            <color attach="background" args={["#ececec"]} />
            <Experience />
        </Canvas>
    );
}

export default App;
