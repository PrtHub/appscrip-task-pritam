import axios from "axios";
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await axios.get("https://fakestoreapi.com/products");
    const data = await res.data;

    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Error fetching products in Server:", error.message);
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}
