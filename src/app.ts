import express from "express"
import { env } from "@/configs"
import { startKafkaConsumer } from "./services"

const app = express()

startKafkaConsumer().catch((error) => console.log(`[KAFKA] - error: `, error))

app.listen(env.APP.PORT, () => {
  console.log(`[Server] - Listening on port ${env.APP.PORT}`)
})
