import { getAllChatRooms } from "@/lib/actions/chatroom.actions";
export async function GET() {
    const data = await getAllChatRooms()
    return data;
}