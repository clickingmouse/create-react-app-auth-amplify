// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Favorite, Property, Message, Auction, Bid } = initSchema(schema);

export {
  Favorite,
  Property,
  Message,
  Auction,
  Bid
};