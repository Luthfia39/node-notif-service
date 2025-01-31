export interface INotification {
  id?: string
  message: string
  type: string
  userId: string
  isRead: boolean
  createdAt?: Date
  updatedAt?: Date
}

export interface INotificationPayload {
    userId: string
    projectName?: string
    taskName?: string
    action: string
}