export const schema = {
    "models": {
        "Favorite": {
            "name": "Favorite",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "properties": {
                    "name": "properties",
                    "isArray": true,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "uid": {
                    "name": "uid",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Favorites",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Property": {
            "name": "Property",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "size": {
                    "name": "size",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "bedrooms": {
                    "name": "bedrooms",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "bathrooms": {
                    "name": "bathrooms",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "price": {
                    "name": "price",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "propertyType": {
                    "name": "propertyType",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "parking": {
                    "name": "parking",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "coverPhoto": {
                    "name": "coverPhoto",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "district": {
                    "name": "district",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "codeName": {
                    "name": "codeName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "saleableArea": {
                    "name": "saleableArea",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "grossArea": {
                    "name": "grossArea",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "buildingAge": {
                    "name": "buildingAge",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "propertyView": {
                    "name": "propertyView",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "photos": {
                    "name": "photos",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "video": {
                    "name": "video",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "floorPlan": {
                    "name": "floorPlan",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "designPlan": {
                    "name": "designPlan",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "map": {
                    "name": "map",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "valuation": {
                    "name": "valuation",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "address": {
                    "name": "address",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "propertyDirection": {
                    "name": "propertyDirection",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "prn": {
                    "name": "prn",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "testAuctionDay": {
                    "name": "testAuctionDay",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Properties",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {},
    "nonModels": {
        "Message": {
            "name": "Message",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "channelID": {
                    "name": "channelID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "author": {
                    "name": "author",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "body": {
                    "name": "body",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Auction": {
            "name": "Auction",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "auctionID": {
                    "name": "auctionID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "auctionStart": {
                    "name": "auctionStart",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "auctionEnd": {
                    "name": "auctionEnd",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "auctionStartTime": {
                    "name": "auctionStartTime",
                    "isArray": false,
                    "type": "AWSTime",
                    "isRequired": false,
                    "attributes": []
                },
                "auctionEndTime": {
                    "name": "auctionEndTime",
                    "isArray": false,
                    "type": "AWSTime",
                    "isRequired": false,
                    "attributes": []
                },
                "startingBid": {
                    "name": "startingBid",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "reservePrice": {
                    "name": "reservePrice",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "bidIncrement": {
                    "name": "bidIncrement",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "latestBid": {
                    "name": "latestBid",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "currentBid": {
                    "name": "currentBid",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "finalBid": {
                    "name": "finalBid",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "propertyID": {
                    "name": "propertyID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "testAuctionDay": {
                    "name": "testAuctionDay",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Bid": {
            "name": "Bid",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "auctionID": {
                    "name": "auctionID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "bidderName": {
                    "name": "bidderName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "bidderID": {
                    "name": "bidderID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "bid": {
                    "name": "bid",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "submissionTime": {
                    "name": "submissionTime",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                }
            }
        }
    },
    "version": "40e8e6c864acd7e7b1846f881fe3576a"
};