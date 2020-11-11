import React, { useState } from 'react'
import { View, Button, Text } from 'react-native';
import {Title, IntroText, Screen, ResultText } from './StartScreenStyling';
import styled from 'styled-components/native'
import { animation } from './Animation/6220-women-with-phone.json'


// try to use useEffect on the button 
  //useEffect(() => {
   // onClick or the random? 

export const StartScreen = () => { 
  const [challenge, setChallenge] = useState('');

  const onClick = (event) => {
    event.preventDefault()
      setChallenge(challengeArray)
      console.log(challenge)
  }
  
  let challengeArray = 
  [
   'Do not apologize today!',
   'Be bold! take extra place in a meeting!', 
   'Do not offer to do meaningless shores!',
   'Practice saying NO!', 
   'Do not say - I am sorry',
   'Do not work overtime',
   'Ask a colleuge out for lunch', 
   'Do not take the blame for someone elses mistake',
   'You do not need everybody to like you', 
   'Take more breaks then you usually do and mingle with colleuges', 
  ]

  const random = Math.floor(Math.random() * challengeArray.length);
  console.log(random, challengeArray[random]);

  return (
    <Container>
        <Title>DAILY EMPOWERMENT CHALLENGES</Title>
        <IntroText> Click on the button to get a challenge that you will focus on today!</IntroText>
          <Button
            onPress={onClick}
            title="Change Challenge"
            >
           </Button>
          <ResultText>{random, challengeArray[random]}</ResultText>
    </Container>
  )
};

const Container = styled.View`
 
  padding-top: 12px;
  background-color: papayawhip;
  height:100%;
  text-align:center;
  justify-content: center;
`;

//display:1;

//expo install react-native-reanimated