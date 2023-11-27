import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  ProductCreated,
  ProductDeleted,
  ProductPurchased,
  ProductUpdated
} from "../generated/ECommerce/ECommerce"

export function createProductCreatedEvent(
  id: BigInt,
  name: string,
  merchant: Address
): ProductCreated {
  let productCreatedEvent = changetype<ProductCreated>(newMockEvent())

  productCreatedEvent.parameters = new Array()

  productCreatedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  productCreatedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  productCreatedEvent.parameters.push(
    new ethereum.EventParam("merchant", ethereum.Value.fromAddress(merchant))
  )

  return productCreatedEvent
}

export function createProductDeletedEvent(id: BigInt): ProductDeleted {
  let productDeletedEvent = changetype<ProductDeleted>(newMockEvent())

  productDeletedEvent.parameters = new Array()

  productDeletedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )

  return productDeletedEvent
}

export function createProductPurchasedEvent(
  id: BigInt,
  buyer: Address
): ProductPurchased {
  let productPurchasedEvent = changetype<ProductPurchased>(newMockEvent())

  productPurchasedEvent.parameters = new Array()

  productPurchasedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  productPurchasedEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )

  return productPurchasedEvent
}

export function createProductUpdatedEvent(
  id: BigInt,
  newName: string
): ProductUpdated {
  let productUpdatedEvent = changetype<ProductUpdated>(newMockEvent())

  productUpdatedEvent.parameters = new Array()

  productUpdatedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  productUpdatedEvent.parameters.push(
    new ethereum.EventParam("newName", ethereum.Value.fromString(newName))
  )

  return productUpdatedEvent
}
