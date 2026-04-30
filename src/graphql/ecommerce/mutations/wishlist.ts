import { gql } from "@apollo/client";

export const CP_WISHLIST_ADD = gql`
  mutation cpWishlistAdd($productId: String, $customerId: String) {
    cpWishlistAdd(productId: $productId, customerId: $customerId) {
      _id
    }
  }
`;

export type CpWishlistAddVariables = {
  productId?: string;
  customerId?: string;
};

export type CpWishlistAddData = {
  cpWishlistAdd: { _id: string };
};

export const CP_WISHLIST_UPDATE = gql`
  mutation cpWishlistUpdate(
    $_id: String!
    $productId: String
    $customerId: String
  ) {
    cpWishlistUpdate(
      _id: $_id
      productId: $productId
      customerId: $customerId
    ) {
      _id
    }
  }
`;

export type CpWishlistUpdateVariables = {
  _id: string;
  productId?: string;
  customerId?: string;
};

export type CpWishlistUpdateData = {
  cpWishlistUpdate: { _id: string };
};

export const CP_WISHLIST_REMOVE = gql`
  mutation cpWishlistRemove($_id: String!) {
    cpWishlistRemove(_id: $_id) {
      _id
    }
  }
`;

export type CpWishlistRemoveVariables = {
  _id: string;
};

export type CpWishlistRemoveData = {
  cpWishlistRemove: { _id: string };
};
