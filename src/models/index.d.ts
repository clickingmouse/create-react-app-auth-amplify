import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Auction {
  readonly id: string;
  readonly auctionRefNo?: string;
  readonly openingBid?: string;
  readonly reservePrice?: string;
  readonly auctionDate?: string;
  readonly auctionStarTime?: string;
  readonly auctionEndTime?: string;
  readonly winningBid?: number;
  readonly lastBid?: number;
  readonly prn?: string;
  constructor(init: ModelInit<Auction>);
  static copyOf(source: Auction, mutator: (draft: MutableModel<Auction>) => MutableModel<Auction> | void): Auction;
}

export declare class Bid {
  readonly id: string;
  readonly bidAmount?: number;
  readonly bidderID?: string;
  readonly prn?: string;
  readonly timestamp?: string;
  readonly auctionID?: string;
  constructor(init: ModelInit<Bid>);
  static copyOf(source: Bid, mutator: (draft: MutableModel<Bid>) => MutableModel<Bid> | void): Bid;
}

export declare class Favorite {
  readonly id: string;
  readonly properties?: (string | null)[];
  readonly uid?: string;
  constructor(init: ModelInit<Favorite>);
  static copyOf(source: Favorite, mutator: (draft: MutableModel<Favorite>) => MutableModel<Favorite> | void): Favorite;
}

export declare class Property {
  readonly id: string;
  readonly size?: number;
  readonly bedrooms?: number;
  readonly bathrooms?: number;
  readonly price?: number;
  readonly propertyType?: number;
  readonly parking?: boolean;
  readonly coverPhoto?: string;
  readonly district?: string;
  readonly codeName?: string;
  readonly saleableArea?: number;
  readonly grossArea?: number;
  readonly buildingAge?: number;
  readonly propertyView?: number;
  readonly photos?: (string | null)[];
  readonly video?: string;
  readonly floorPlan?: string;
  readonly designPlan?: string;
  readonly map?: string;
  readonly valuation?: number;
  readonly address?: string;
  readonly propertyDirection?: string;
  readonly prn: string;
  constructor(init: ModelInit<Property>);
  static copyOf(source: Property, mutator: (draft: MutableModel<Property>) => MutableModel<Property> | void): Property;
}