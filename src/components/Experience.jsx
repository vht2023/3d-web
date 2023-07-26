import { Environment, OrbitControls, Sky, useTexture } from "@react-three/drei";
import MyAvatar from "./MyAvatar";
import TanAvatar from "./TanAvatar";
import FuAvatar from "./FuAvatar";
import ThangAvatar from "./ThangAvatar";
import ThuanAvatar from "./ThuanAvatar";
import ThuanGirlAvatar from "./ThuanGirlAvatar";
import { useThree } from "@react-three/fiber";
import { MeshBasicMaterial } from "three";

export const Experience = () => {
    const texture = useTexture("textures/bg1.jpg");
    const viewport = useThree((state) => state.viewport);
    return (
        <>
            <OrbitControls />
            <Sky />
            <Environment preset="sunset" />
            <group position-y={-1} position-x={-3} position-z={1}>
                <MyAvatar />
            </group>
            <group position-y={-1} position-x={-1}>
                <FuAvatar />
            </group>
            <group position-y={-1} position-x={0} position-z={1}>
                <ThangAvatar />
            </group>
            <group position-y={-1} position-x={1}>
                <TanAvatar />
            </group>
            <group position-y={-1} position-x={2} position-z={1}>
                <ThuanGirlAvatar />
            </group>
            <mesh scale={[8, 0.5, 7]} position-y={-1.25} position-z={1}>
                <boxGeometry />
                <meshStandardMaterial color="white" />
            </mesh>
            <mesh position-z={-2.5} position-y={0.6} scale={[0.27, 0.3, 1]}>
                <planeGeometry args={[viewport.width, viewport.height]} />
                <meshBasicMaterial map={texture} />
            </mesh>
            <ambientLight intensity={1} />
        </>
    );
};
