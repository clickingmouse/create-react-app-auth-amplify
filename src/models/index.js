// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Auction, Bid, Favorite, Property } = initSchema(schema);

export {
  Auction,
  Bid,
  Favorite,
  Property
};