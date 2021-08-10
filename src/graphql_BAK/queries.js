/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
