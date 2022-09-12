// Auth stack
import CheckingPassword from '../screens/Auth/CheckingPassword';
import ForgetPassword from '../screens/Auth/ForgetPassword';
import Login from '../screens/Auth/Login';
import NewPass from '../screens/Auth/NewPass';
import Onboarding from '../screens/Auth/Onboarding';
import SignUp from '../screens/Auth/SignUp';
import Splash_Screen from '../screens/Auth/Splash_Screen';
// start home stack
import FilterScreen from '../screens/Home/FilterScreen';
import AddServices from '../screens/service/AddServices';
import CategoryScreen from '../screens/Home/Category.screen';
import ServicesDetailsMore from '../screens/Home/ServicesDetailsMore';
import Payment from '../screens/Home/payment';
import Search from '../screens/Home/Search';
import FilterSearch from '../screens/Home/FilterSearch';
import Notification from '../screens/Home/Notification';
import ProviderScreen from '../screens/Home/provider.screen';
import Dates from '../screens/Home/Dates';
// tab stack
import HomeScreen from '../screens/tab/Home.screen'; // homeStack contain screens home
import GalleryScreen from '../screens/tab/Gallery.screen';
import MyServisScreen from '../screens/tab/myServis.screen';
import MyRequestsScreen from '../screens/tab/myRequests.screen';
import MyProfileScreen from '../screens/tab/myProfile.Screen';

// profile stack
import ProfileModificationScreen from '../screens/profile/ProfileModification.screen';
import AboutMonoScreen from '../screens/profile/AboutMono.screen';
import MyFavoritesScreen from '../screens/profile/MyFavorites.screen';
import ShareCodeScreen from '../screens/profile/ShareCode.screen';
import walletProfile from '../screens/profile/walletProfile';
import AddressProfile from '../screens/profile/Address.screen';
import AddressEditProfile from '../screens/profile/AddressEditProfile.screen';

// gallery stack
import AddGallery from '../screens/gallery/AddGallery';
import ServiceDetails from '../screens/gallery/ServiceDetails';

// navigation stack
import TabStack from './TabStack'; // tabStack contain tab  screens
import HomeStack from './HomeStack';
import AuthStack from './AuthStack';
import ProfileStack from './ProfileStack';
import GalleryStack from './GalleryStack';
import ServiceStack from './ServiceStack';
import Screen_navigation from './Screen_navigation'

export {
  // start Auth
  CheckingPassword,
  ForgetPassword,
  Login,
  NewPass,
  Onboarding,
  SignUp,
  Splash_Screen,
  //   end Auth

  // filter
  FilterScreen,
  // filter

  //start Home
  HomeScreen,
  Payment,
  CategoryScreen,
  ServicesDetailsMore,
  Search,
  FilterSearch,
  Notification,
  ProviderScreen,
  Dates,
  // end home

  // start service
  AddServices,
  // end service

  // start gallery
  AddGallery,
  ServiceDetails,
  // end gallery

  // tab start
  HomeStack, // homeStack contain screens home
  GalleryScreen,
  MyServisScreen,
  MyRequestsScreen,
  MyProfileScreen,
  // tab end

  // start profile
  ProfileModificationScreen,
  AboutMonoScreen,
  MyFavoritesScreen,
  ShareCodeScreen,
  walletProfile,
  AddressProfile,
  AddressEditProfile,
  // end profile

  // Stack navigation
  AuthStack, // AuthStack contain screens auth
  TabStack, //  tabStack contain tab  screens
  // HomeStack, // homeStack contain screens home
  ProfileStack, // contain screens in profile
  GalleryStack, // contain screens in gallery
  ServiceStack, // contain screens in service
  Screen_navigation,
};
