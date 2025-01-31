
import { Kafka, Partitioners } from "kafkajs"

export const kafka = new Kafka({
  clientId: "core-service",
  brokers: ["localhost:9092"],
  retry: {
    initialRetryTime: 100,
    retries: 8,
  },
})

export const producer = kafka.producer({
  createPartitioner: Partitioners.LegacyPartitioner,
})

export const TOPICS = {
  PROJECT_CHANGES: "project-changes",
  TASK_CHANGES: "task-changes",
} as const

export const connectProducer = async () => {
  try {
    await producer.connect()
    console.log("[Kafka] - Producer connected")
  } catch (error) {
    console.error("[Kafka] - error connecting producer")
    throw error
  }
}

import {Kafka, Partitioners} from 'kafkajs'

export const kafka =  new Kafka({
    clientId: 'core-service',
    brokers: ['localhost:9092'],
    retry:{
        initialRetryTime: 100,
        retries: 8
    }
})

export const producer = kafka.producer({
    createPartitioner: Partitioners.LegacyPartitioner
})

export const TOPICS = {
    PROJECT_CHANGES: 'project-changes',
    TASK_CHANGES: 'task-changes'
} as const

export const connectProducer = async () => {
    try {
        await producer.connect()
        console.log('[KAFKA] - Producer connected')
    } catch (error) {
        console.error('[KAFKA] - Error connecting producer')
        throw error
    }
}
