import { styled } from 'nativewind'
import { ImageBackground } from 'react-native'
import Stripes from '../assets/stripes.svg'
import blurBg from '../assets/luz.png'
import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import { SplashScreen, Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import * as SecureStore from 'expo-secure-store'

export default function Layout() {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState<
    null | boolean
  >(null)

  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  })

  useEffect(() => {
    SecureStore.getItemAsync('token').then((token) => {
      setIsUserAuthenticated(!!token)
    })
  }, [])

  // Permite usar tailwind no componente
  const StyledStrypes = styled(Stripes)

  if (!hasLoadedFonts) {
    return <SplashScreen />
  }

  return (
    <ImageBackground
      source={blurBg}
      className=" relative flex-1 bg-gray-900 "
      imageStyle={{
        position: 'absolute',
        left: '-100%',
      }}
    >
      <StyledStrypes className="absolute left-2" />

      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: 'transparent',
          },
          animation: 'fade',
        }}
      >
        {/* Prop Redirect: Recebe um valor boolean que quando verdadeiro redireciona para a proxima rota, que esta logo abaixo */}
        <Stack.Screen name="index" redirect={isUserAuthenticated} />
        <Stack.Screen name="new" />
        <Stack.Screen name="memories" />
      </Stack>

      <StatusBar style="light" translucent />
    </ImageBackground>
  )
}
