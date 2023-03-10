import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'
import { GeneralStatistics } from '../sreens/general-statistics'
import { Home } from '../sreens/home'
import { NewMeal } from '../sreens/new-meal'

export type AppRoutesList = {
  Home: undefined
  NewMeal: undefined
  GeneralStatistics: undefined
}

export type StackNavigationProp = NativeStackNavigationProp<AppRoutesList>

const { Screen, Navigator } = createNativeStackNavigator<AppRoutesList>()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="NewMeal" component={NewMeal} />
      <Screen name="GeneralStatistics" component={GeneralStatistics} />
    </Navigator>
  )
}
