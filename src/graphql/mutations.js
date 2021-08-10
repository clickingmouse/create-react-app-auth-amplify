/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
      id
      channelID
      author
      body
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
      id
      channelID
      author
      body
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
      id
      channelID
      author
      body
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createAuction = /* GraphQL */ `
  mutation CreateAuction(
    $input: CreateAuctionInput!
    $condition: ModelAuctionConditionInput
  ) {
    createAuction(input: $input, condition: $condition) {
      id
      auctionID
      auctionStart
      auctionStartTime
      auctionEndTime
      auctionEnd
      startingBid
      reservePrice
      bidIncrement
      lastestBid
      currentBid
      finalBid
      propertyID
      testAuctionDay
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateAuction = /* GraphQL */ `
  mutation UpdateAuction(
    $input: UpdateAuctionInput!
    $condition: ModelAuctionConditionInput
  ) {
    updateAuction(input: $input, condition: $condition) {
      id
      auctionID
      auctionStart
      auctionStartTime
      auctionEndTime
      auctionEnd
      startingBid
      reservePrice
      bidIncrement
      lastestBid
      currentBid
      finalBid
      propertyID
      testAuctionDay
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteAuction = /* GraphQL */ `
  mutation DeleteAuction(
    $input: DeleteAuctionInput!
    $condition: ModelAuctionConditionInput
  ) {
    deleteAuction(input: $input, condition: $condition) {
      id
      auctionID
      auctionStart
      auctionStartTime
      auctionEndTime
      auctionEnd
      startingBid
      reservePrice
      bidIncrement
      lastestBid
      currentBid
      finalBid
      propertyID
      testAuctionDay
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createBid = /* GraphQL */ `
  mutation CreateBid(
    $input: CreateBidInput!
    $condition: ModelBidConditionInput
  ) {
    createBid(input: $input, condition: $condition) {
      id
      auctionID
      bidderName
      bidderID
      bid
      submittedTime
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateBid = /* GraphQL */ `
  mutation UpdateBid(
    $input: UpdateBidInput!
    $condition: ModelBidConditionInput
  ) {
    updateBid(input: $input, condition: $condition) {
      id
      auctionID
      bidderName
      bidderID
      bid
      submittedTime
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteBid = /* GraphQL */ `
  mutation DeleteBid(
    $input: DeleteBidInput!
    $condition: ModelBidConditionInput
  ) {
    deleteBid(input: $input, condition: $condition) {
      id
      auctionID
      bidderName
      bidderID
      bid
      submittedTime
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createFavorite = /* GraphQL */ `
  mutation CreateFavorite(
    $input: CreateFavoriteInput!
    $condition: ModelFavoriteConditionInput
  ) {
    createFavorite(input: $input, condition: $condition) {
      id
      properties
      uid
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateFavorite = /* GraphQL */ `
  mutation UpdateFavorite(
    $input: UpdateFavoriteInput!
    $condition: ModelFavoriteConditionInput
  ) {
    updateFavorite(input: $input, condition: $condition) {
      id
      properties
      uid
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteFavorite = /* GraphQL */ `
  mutation DeleteFavorite(
    $input: DeleteFavoriteInput!
    $condition: ModelFavoriteConditionInput
  ) {
    deleteFavorite(input: $input, condition: $condition) {
      id
      properties
      uid
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createProperty = /* GraphQL */ `
  mutation CreateProperty(
    $input: CreatePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    createProperty(input: $input, condition: $condition) {
      id
      size
      bedrooms
      bathrooms
      price
      propertyType
      parking
      coverPhoto
      district
      codeName
      saleableArea
      grossArea
      buildingAge
      propertyView
      photos
      video
      floorPlan
      designPlan
      map
      valuation
      address
      propertyDirection
      prn
      testAuctionDay
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateProperty = /* GraphQL */ `
  mutation UpdateProperty(
    $input: UpdatePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    updateProperty(input: $input, condition: $condition) {
      id
      size
      bedrooms
      bathrooms
      price
      propertyType
      parking
      coverPhoto
      district
      codeName
      saleableArea
      grossArea
      buildingAge
      propertyView
      photos
      video
      floorPlan
      designPlan
      map
      valuation
      address
      propertyDirection
      prn
      testAuctionDay
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteProperty = /* GraphQL */ `
  mutation DeleteProperty(
    $input: DeletePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    deleteProperty(input: $input, condition: $condition) {
      id
      size
      bedrooms
      bathrooms
      price
      propertyType
      parking
      coverPhoto
      district
      codeName
      saleableArea
      grossArea
      buildingAge
      propertyView
      photos
      video
      floorPlan
      designPlan
      map
      valuation
      address
      propertyDirection
      prn
      testAuctionDay
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
