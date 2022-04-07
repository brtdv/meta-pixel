/**
 * The following types is based on the documentation found at the official Pixel Docs:
 *  - https://www.facebook.com/business/help/402791146561655?id=1205376682832142
 *  - https://developers.facebook.com/docs/meta-pixel/reference
 *  There may be erros within this definition, please feel free to create an PR if you find any issues.
 *  */

declare var fbq: Meta.Pixel.Fbq;
declare module Meta.Pixel {
  type DataCollection =
    | AddPaymentInfo
    | AddToCart
    | AddToWishlist
    | CompleteRegistration
    | Contact
    | CustomizeProduct
    | Donate
    | FindLocation
    | InitiateCheckout
    | Lead
    | PageView
    | Purchase
    | Schedule
    | Search
    | StartTrial
    | SubmitApplication
    | Subscribe
    | ViewContent;
  type Fbq = {
    (eventType: string, pixelId: string, eventName: string, data: DataCollection): void;
    (eventType: string, eventName: string): void;
    (eventType: string, eventName: string, data: DataCollection): void;
    (eventType: string, eventName: string, data: boolean, pixelId: string): void;
  };

  type ConfigOptions = {
    pixelId: string;
    autoConfig?: boolean;
  };

  type AddPaymentInfo = {
    content_category?: string;
    content_ids?: string[];
    contents?: object[];
    currency?: string;
    value?: number;
  };

  type AddToCart = {
    content_ids?: string[];
    content_name?: string;
    content_type?: string;
    contents?: object[];
    currency?: string;
    value?: number;
  };

  type AddToWishlist = {
    content_name?: string;
    content_category?: string;
    content_ids?: string[];
    contents?: object[];
    currency?: string;
    value?: number;
  };

  type CompleteRegistration = {
    content_name?: string;
    currency?: string;
    status?: boolean;
    value?: number;
  };

  type Unknown = {
    data: any;
  };

  type Contact = Unknown;
  type CustomizeProduct = Unknown;
  type Donate = Unknown;
  type FindLocation = Unknown;

  type InitiateCheckout = {
    content_category?: string;
    content_ids?: string[];
    contents?: object[];
    currency?: string;
    num_items?: number;
    value?: number;
  };

  type Lead = {
    content_category?: string;
    content_name?: string;
    currency?: string;
    value?: number;
  };

  type PageView = Unknown;

  type Purchase = {
    content_ids?: string[];
    content_name?: string;
    content_type?: string;
    contents?: object[];
    currency?: string;
    num_items?: number;
    value?: number;
  };

  type Schedule = Unknown;

  type Search = {
    content_category?: string;
    content_ids?: string[];
    contents?: object[];
    currency?: string;
    search_string?: string;
    value?: number;
  };

  type StartTrial = {
    currency?: string;
    predicted_ltv?: number;
    value?: number;
  };

  type SubmitApplication = Unknown;

  type Subscribe = {
    currency?: string;
    predicted_ltv?: number;
    value?: number;
  };

  type ViewContent = {
    content_ids?: string[];
    content_category?: string;
    content_name?: string;
    content_type?: string;
    contents?: object[];
    currency?: string;
    value?: number;
  };
}
