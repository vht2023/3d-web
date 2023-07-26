import { Environment, OrbitControls, Sky } from "@react-three/drei";
import MyAvatar from "./MyAvatar";
import TanAvatar from "./TanAvatar";
import FuAvatar from "./FuAvatar";
import ThangAvatar from "./ThangAvatar";
import ThuanAvatar from "./ThuanAvatar";
import ThuanGirlAvatar from "./ThuanGirlAvatar";

export const Experience = () => {
    return (
        <>
            <OrbitControls />
            <Sky />
            <Environment preset="sunset" />
            <group>
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
            </group>
            {/* <mesh scale={[]} rotation-x={-Math.PI * 0.5}>
                <planeGeometry />
                <meshStandardMaterial color="white" />
            </mesh> */}
            <mesh scale={[10, 0.5, 10]} position-y={-1.25}>
                <boxGeometry />
                <meshStandardMaterial color="white" />
            </mesh>
            <ambientLight intensity={1} />
        </>
    );
};
