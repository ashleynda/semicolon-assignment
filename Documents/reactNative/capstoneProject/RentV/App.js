import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './src/UserPages/Home/HomeScreen'
import SignupScreen from './src/UserPages/Signup/SignupScreen'
import BookACarScreen from './src/customerPages/BookACar/BookACarScreen'
import FindACarScreen from './src/customerPages/FindACar/FindACarScreen'
import Intro1Screen from './src/UserPages/Introduction/Intro1Screen'
import Intro2Screen from './src/UserPages/Introduction/Intro2Screen'
import Intro3Screen from './src/UserPages/Introduction/Intro3Screen'
import CustomerSupportScreen from './src/UserPages/CustomerSupport/CustomerSupportScreen'
import ProfileScreen from './src/UserPages/Profile/LenderProfileScreen'
import SummaryDetailsScreen from './src/customerPages/Summary/SummaryDetailsScreen'
import UploadCarsScreen from './src/UserPages/UploadCars/UploadCarsScreen'
import GetStartedScreen from './src/UserPages/GetStarted/GetStartedScreen'
import CustomerDashboardScreen from './src/customerPages/CustomerDashboard/CustomerDashboardScreen'
import ViewCarScreen from './src/UserPages/View/ViewCarScreen'
import SearchCarScreen from './src/customerPages/SearchCar/SearchCarScreen'
import UploadSuccessScreen from './src/UserPages/UploadSuccess/UploadSuccessScreen'
import DepositScreen from './src/customerPages/Deposit/DepositScreen'
import SigninScreen from './src/UserPages/Signin/SigninScreen'
import CustomerSignupScreen from './src/customerPages/SignupCustomer/CustomerSignupScreen'
import CustomerLoginScreen from './src/customerPages/SigninCustomer/CustomerLoginScreen'
// import WithdrawScreen from './src/UserPages/Withdraw/WithdrawScreen'
import UploadedCarsListScreen from './src/UserPages/UploadCars/UploadedCarsListScreen'
import DashboardScreen from './src/UserPages/Dashboard/DashboardScreen'
import CustomerProfileScreen from './src/customerPages/Profile/CustomerProfileScreen'
import EditLenderProfileScreen from './src/UserPages/Profile/EditLenderProfileScreen'
import TransactionHistoryScreen from './src/UserPages/History/TransactionHistoryScreen'
import WithdrawScreen from './src/UserPages/Withdraw/WithdrawScreen'
import DepositSuccessScreen from './src/customerPages/Deposit/DepositSuccessScreen'
import WithdrawalSuccessScreen from './src/UserPages/Withdraw/WithdrawalSuccessScreen'

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Overview', headerShown: false }}
        />

        <Stack.Screen
          name="CustomerSupport"
          component={CustomerSupportScreen}
          options={{ title: 'Customer Support' }}
        />

        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: 'profile' }}
        />

        <Stack.Screen
          name="SearchForCar"
          component={SearchCarScreen}
          options={{ title: 'search car' }}
        />

        <Stack.Screen
          name="Intro1"
          component={Intro1Screen}
          options={{ title: 'first', headerShown: false }}
        />

        <Stack.Screen
          name="Intro2"
          component={Intro2Screen}
          options={{ title: 'second', headerShown: false }}
        />

        <Stack.Screen
          name="Intro3"
          component={Intro3Screen}
          options={{ title: 'third', headerShown: false }}
        />

        <Stack.Screen
          name="GetStarted"
          component={GetStartedScreen}
          options={{ title: 'Get Started', headerShown: false }}
        />

        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{ title: 'Sign up' }}
        />

        <Stack.Screen
          name="Signin"
          component={SigninScreen}
          options={{ title: 'Sign in' }}
        />

        <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{ title: 'Dashboard', headerShown: false}}
        />

{/* //           options={{ title: 'Dashboard' }} */}


        <Stack.Screen
          name="SignupCustomer"
          component={CustomerSignupScreen}
          options={{ title: 'customer', headerShown: true }}
        />

        <Stack.Screen
          name="SignupCustomerLogin"
          component={CustomerLoginScreen}
          options={{ title: 'Customers Login', headerShown: true }}
        />

        <Stack.Screen
          name="UploadCars"
          component={UploadCarsScreen}
          initialParams={{ carBrand: 'Toyota' }}
          options={{ title: 'lender', headerShown: true }}
        />

        <Stack.Screen
          name="CustomerDashboard"
          component={CustomerDashboardScreen}
          options={{ title: 'Customer Dashboard', headerShown: false }}
        />

        <Stack.Screen
          name="CustomerProfile"
          component={CustomerProfileScreen}
          options={{ title: 'Customer Profile', headerShown: true }}
        />

        <Stack.Screen
          name="Find"
          component={FindACarScreen}
          options={{ title: 'Find A Car' }}
        />

        <Stack.Screen
          name="View"
          component={ViewCarScreen}
          options={{ title: 'View Cars' }}
        />

        <Stack.Screen
          name="Book"
          component={BookACarScreen}
          options={{ title: 'Book A Car' }}
        />

        <Stack.Screen
          name="Summary"
          component={SummaryDetailsScreen}
          options={{ title: 'Summary Details' }}
        />      

        <Stack.Screen
          name="Uploaded"
          component={UploadSuccessScreen}
          options={{ title: 'Uploaded', headerShown: false }}
        />

        <Stack.Screen
          name="UploadedCarsList"
          component={UploadedCarsListScreen}
          options={{ title: 'Cars List', headerShown: false }}
        />

        <Stack.Screen
          name="Deposit"
          component={DepositScreen}
          options={{ title: 'Deposit', headerShown: false }}
        />

        <Stack.Screen
          name="DepositSuccess"
          component={DepositSuccessScreen}
          options={{ title: 'Deposit Success', headerShown: false }}
        />

        <Stack.Screen
          name="Withdraw"
          component={WithdrawScreen}
          options={{ title: 'Withdraw', headerShown: false }}
        />

        <Stack.Screen
          name="WithdrawSuccess"
          component={WithdrawalSuccessScreen}
          options={{ title: 'Withdraw', headerShown: false }}
        />

        <Stack.Screen
          name='EditLender'
          component={EditLenderProfileScreen}
          options={{title: 'Edit Lender Profile', headerShown: true}}
        />

        <Stack.Screen
          name='TransactionHistory'
          component={TransactionHistoryScreen}
          options={{title: 'Transaction History', headerShown: true}}
        />




      </Stack.Navigator>
    </NavigationContainer>
  )
}
