import { Timestamp, WithId } from '@/lib/firebase'

export type UserDocumentData = {
  createAt: Timestamp
  name: string | null
  photoUrl: string | null
}

export type User = WithId<UserDocumentData>
