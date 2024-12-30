import React, { useRef, useEffect } from "react";
import { Animated } from 'react-native'
import styled from "styled-components/native";
import Icons from "../assets/Icons";

const Loading = ({}) =>{
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(()=>{
    const spin = Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 2,
        duration: 1500,
        useNativeDriver: true,
      })
    );
    spin.start();
    return () => spin.stop();
  },[rotateAnim]);
  const spinInterpolate = rotateAnim.interpolate({
    inputRange: [0, 2],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Container>

      <SpinnerContainer style={{ transform: [{ rotate: spinInterpolate }] }}>
        <Icons.Spinner />
      </SpinnerContainer>
    </Container>
  )
};

export default Loading;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const SpinnerContainer = styled(Animated.View)`
  justify-content: center;
  align-items: center;
`;