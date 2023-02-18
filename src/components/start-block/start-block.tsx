import { RigidBody } from '@react-three/rapier';
import React from 'react';

export interface IStartBlockProps {};

export const StartBlock: React.FC<IStartBlockProps> = () => {
    return (
        <RigidBody type="fixed" friction={1} position={[0, 0, 10]} rotation={[0, 0, 0]}>
            <mesh>
                <boxGeometry args={[2, 0.25, 2]} />
                <meshStandardMaterial color="black" metalness={5} />
            </mesh>
        </RigidBody>
    );
};
