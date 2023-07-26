import { OrbitControls } from "@react-three/drei";
import MyAvatar from "./MyAvatar";
import TanAvatar from "./TanAvatar";
import FuAvatar from "./FuAvatar";
import ThangAvatar from "./ThangAvatar";
import ThuanAvatar from "./ThuanAvatar";

export const Experience = () => {
    return (
        <>
            <OrbitControls />
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
                <ThuanAvatar />
            </group>
            <ambientLight intensity={1} />
        </>
    );
};
