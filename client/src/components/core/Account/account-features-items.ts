import { SvgIconTypeMap } from "@material-ui/core";
import { OverrideProps } from "@material-ui/core/OverridableComponent";
import {
  OrdersIcon,
  AccountEditIcon,
  AddressIcon,
  PasswordResetIcon,
  WishListIcon,
  CategoryIcon,
  ProductIcon,
  PostIcon,
} from "../../../assets";

interface AccountFeaturesItems {
  Svg: React.FC<
    OverrideProps<SvgIconTypeMap<Record<string, unknown>, "svg">, "svg">
  >;
  title: string;
  subtitle: string;
  url: string;
  role: 0 | 1;
}

const accountFeaturesItems: AccountFeaturesItems[] = [
  {
    Svg: OrdersIcon,
    title: "Your Orders",
    subtitle: "Track and buy things again",
    url: "/orders",
    role: 0,
  },
  {
    Svg: AccountEditIcon,
    title: "Account Information",
    subtitle: "Edit your personal information",
    url: "/account-information",
    role: 0,
  },
  {
    Svg: WishListIcon,
    title: "Wish List",
    subtitle: "Add items to your whish list",
    url: "/wishlist",
    role: 0,
  },
  {
    Svg: AddressIcon,
    title: "Your Address",
    subtitle: "Edit your shipping address",
    url: "/address",
    role: 0,
  },
  {
    Svg: PasswordResetIcon,
    title: "Reset Password",
    subtitle: "Reset your password",
    url: "/password",
    role: 0,
  },
  {
    Svg: CategoryIcon,
    title: "Create Category",
    subtitle: "Create a new category",
    url: "/category/create",
    role: 1,
  },
  {
    Svg: ProductIcon,
    title: "Your Products",
    subtitle: "Create and manage products",
    url: "/my/products",
    role: 1,
  },
  {
    Svg: PostIcon,
    title: "Your Blog",
    subtitle: "Create and manage posts",
    url: "/my/posts",
    role: 1,
  },
];

export default accountFeaturesItems;
