/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
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
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncMessages = /* GraphQL */ `
  query SyncMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMessages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getAuction = /* GraphQL */ `
  query GetAuction($id: ID!) {
    getAuction(id: $id) {
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
export const listAuctions = /* GraphQL */ `
  query ListAuctions(
    $filter: ModelAuctionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAuctions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncAuctions = /* GraphQL */ `
  query SyncAuctions(
    $filter: ModelAuctionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAuctions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getBid = /* GraphQL */ `
  query GetBid($id: ID!) {
    getBid(id: $id) {
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
export const listBids = /* GraphQL */ `
  query ListBids(
    $filter: ModelBidFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBids(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncBids = /* GraphQL */ `
  query SyncBids(
    $filter: ModelBidFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBids(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getFavorite = /* GraphQL */ `
  query GetFavorite($id: ID!) {
    getFavorite(id: $id) {
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
export const listFavorites = /* GraphQL */ `
  query ListFavorites(
    $filter: ModelFavoriteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFavorites(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        properties
        uid
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncFavorites = /* GraphQL */ `
  query SyncFavorites(
    $filter: ModelFavoriteFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFavorites(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        properties
        uid
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getProperty = /* GraphQL */ `
  query GetProperty($id: ID!) {
    getProperty(id: $id) {
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
export const listPropertys = /* GraphQL */ `
  query ListPropertys(
    $filter: ModelPropertyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPropertys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncProperties = /* GraphQL */ `
  query SyncProperties(
    $filter: ModelPropertyFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProperties(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
