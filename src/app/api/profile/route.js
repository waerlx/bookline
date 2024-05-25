import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import User from "@/models/User";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { UserInfo } from "@/models/UserInfo";

// Функция для подключения к базе данных
const connectToDatabase = async () => {
  if (mongoose.connection.readyState !== 1) {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
};

export async function PUT(req) {
  try {
    await connectToDatabase();
    const data = await req.json();
    const { name, image, ...otherUserInfo } = data;
    const session = await getServerSession(authOptions);

    if (!session) {
      return new Response(JSON.stringify({ error: 'Не авторизован' }), { status: 401 });
    }

    const email = session.user.email;
    await User.updateOne({ email }, { name });
    await UserInfo.findOneAndUpdate({ email }, otherUserInfo, { upsert: true });

    return new Response(JSON.stringify(true), { status: 200 });
  } catch (error) {
    console.error('Ошибка при обновлении пользователя:', error);
    return new Response(JSON.stringify({ error: 'Внутренняя ошибка сервера' }), { status: 500 });
  }
}

export async function GET() {
  try {
    await connectToDatabase();
    const session = await getServerSession(authOptions);

    if (!session) {
      return new Response(JSON.stringify({}), { status: 200 });
    }

    const email = session.user.email;
    const user = await User.findOne({ email }).lean();
    const userInfo = await UserInfo.findOne({ user: user._id }).lean();

    return new Response(JSON.stringify({ ...user, ...userInfo }), { status: 200 });
  } catch (error) {
    console.error('Ошибка при получении пользователя:', error);
    return new Response(JSON.stringify({ error: 'Внутренняя ошибка сервера' }), { status: 500 });
  }
}
