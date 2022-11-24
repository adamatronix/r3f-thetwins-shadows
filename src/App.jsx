import { useRef, useState, useTransition } from 'react'
import { AccumulativeShadows, RandomizedLight, Center, Environment, OrbitControls, RoundedBox, ContactShadows } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'

export default function App() {
  
  return (
    <Canvas shadows camera={{ position: [0, 0, 4.5], fov: 50 }}>
      <group position={[0, -0.65, 0]}>
        <Top position={[0,1.7,0]}/>
        <Sphere position={[-0.5,0,0]}/>
        <Sphere position={[0.5,0,0]}/>
        <Shadows />
      </group>
      <Env />
      <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.1} maxPolarAngle={Math.PI / 2.1} />
    </Canvas>
  )
}

const Shadows = () => {
  return (
    <AccumulativeShadows temporal frames={180} color="purple" colorBlend={0.5} opacity={1} scale={10} alphaTest={0.85}>
      <RandomizedLight amount={8} radius={5} ambient={0.5} position={[5, 3, 2]} bias={0.001}/>
    </AccumulativeShadows>
  )
}

function Sphere({...rest}) {
  return (
    <Center top {...rest}>
      <RoundedBox args={[0.5, 1.5, 0.5]} radius={0.02} smoothness={10} castShadow>
        <meshStandardMaterial metalness={0.6} roughness={0.2}/>
      </RoundedBox>
    </Center>
  )
}

function Top({...rest}) {
  return (
    <Center top {...rest}>
      <RoundedBox args={[2.2, 0.5, 0.5]} radius={0.02} smoothness={10} castShadow>
        <meshStandardMaterial metalness={0.6} roughness={0.2} />
      </RoundedBox>
    </Center>
  )
}

function Env() {
  return <Environment preset='sunset' background blur={1} />
}