import {
  ProductCreated as ProductCreatedEvent,
  ProductDeleted as ProductDeletedEvent,
  ProductPurchased as ProductPurchasedEvent,
  ProductUpdated as ProductUpdatedEvent
} from "../generated/ECommerce/ECommerce"
import {
  ProductCreated,
  ProductDeleted,
  ProductPurchased,
  ProductUpdated
} from "../generated/schema"

export function handleProductCreated(event: ProductCreatedEvent): void {
  let entity = new ProductCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.ECommerce_id = event.params.id
  entity.name = event.params.name
  entity.merchant = event.params.merchant

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleProductDeleted(event: ProductDeletedEvent): void {
  let entity = new ProductDeleted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.ECommerce_id = event.params.id

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleProductPurchased(event: ProductPurchasedEvent): void {
  let entity = new ProductPurchased(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.ECommerce_id = event.params.id
  entity.buyer = event.params.buyer

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleProductUpdated(event: ProductUpdatedEvent): void {
  let entity = new ProductUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.ECommerce_id = event.params.id
  entity.newName = event.params.newName

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
