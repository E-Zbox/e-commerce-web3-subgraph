import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { ProductCreated } from "../generated/schema"
import { ProductCreated as ProductCreatedEvent } from "../generated/ECommerce/ECommerce"
import { handleProductCreated } from "../src/e-commerce"
import { createProductCreatedEvent } from "./e-commerce-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let id = BigInt.fromI32(234)
    let name = "Example string value"
    let merchant = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newProductCreatedEvent = createProductCreatedEvent(id, name, merchant)
    handleProductCreated(newProductCreatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ProductCreated created and stored", () => {
    assert.entityCount("ProductCreated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ProductCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "name",
      "Example string value"
    )
    assert.fieldEquals(
      "ProductCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "merchant",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
