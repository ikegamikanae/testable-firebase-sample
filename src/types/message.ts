import { Timestamp, WithId } from '@/lib/firebase'

export type MessageDocumentData = {
  createAt: Timestamp
  content: string
  senderId: string
}

export type Message = WithId<MessageDocumentData>
