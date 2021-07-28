import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class Message {
  readonly id: string;
  readonly channelID: string;
  readonly author: string;
  readonly body: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Message>);
}

export declare class Auction {
  readonly id: string;
  readonly auctionID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  readonly auctionStart?: string;
  readonly auctionEnd?: string;
  readonly auctionStartTime?: string;
  readonly auctionEndTime?: string;
  readonly startingBid: number;
  readonly reservePrice: number;
  readonly bidIncrement?: number;
  readonly latestBid?: number;
  readonly currentBid?: number;
  readonly finalBid?: number;
  readonly propertyID: string;
  readonly testAuctionDay?: number;
  constructor(init: ModelInit<Auction>);
}

export declare class Bid {
  readonly id: string;
  readonly auctionID: string;
  readonly bidderName: string;
  readonly bidderID: string;
  readonly bid: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  readonly submissionTime?: string;
  constructor(init: ModelInit<Bid>);
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
  readonly testAuctionDay?: number;
  constructor(init: ModelInit<Property>);
  static copyOf(source: Property, mutator: (draft: MutableModel<Property>) => MutableModel<Property> | void): Property;
}