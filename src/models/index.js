// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Message, Auction, Bid, Favorite, Property } = initSchema(schema);

export {
  Message,
  Auction,
  Bid,
  Favorite,
  Property
};