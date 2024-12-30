import React, { useRef, useEffect } from "react";
import { Animated } from "react-native";
import styled from "styled-components/native";
import Icons from "../assets/Icons";

const Loading = () => {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const spin = Array.from({ length: 8 }).map((_, index) =>
      Animated.sequence([
        Animated.timing(rotateAnim, {
          toValue: (index + 1) * 45,
          duration: 0,
          useNativeDriver: true,
        }),
        Animated.delay(100),
      ])
    );

    const loop = Animated.loop(Animated.sequence(spin));
    loop.start();

    return () => loop.stop();
  }, [rotateAnim]);


  const spinInterpolate = rotateAnim.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Container>
      <SpinnerContainer style={{ transform: [{ rotate: spinInterpolate }] }}>
        <Icons.SpinnerGap />
      </SpinnerContainer>
    </Container>
  );
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
