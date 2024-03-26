"use client";
import LocationDateReserve from "@/components/LocationDateReserve";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { ReservationItem2 } from "../../../interfaces";
import { addReservation } from "@/redux/features/cartSlice";
import MenuPanel from "@/components/MenuPanel";
import { useSession } from "next-auth/react";
import { DatePicker } from "@mui/x-date-pickers";
import { useEffect } from "react";
import getMenu from "@/libs/getMenu";
import { MenuJson } from "../../../interfaces";

export default function Reservations() {
  const urlParams = useSearchParams();
  const userid = urlParams.get("id");
  const restaurant = urlParams.get("restaurant");

  const { data: session } = useSession();
  const name = session?.user.name;

  const dispatch = useDispatch<AppDispatch>();

  const [menu, setMenu] = useState<MenuJson | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (userid) {
        const fetchedMenu = await getMenu(userid);
        if (fetchedMenu) {
          setMenu(fetchedMenu);
        }
      }
    };
    fetchData();
  }, [userid]);

  const makeReservation = () => {
    if (revDate && name && restaurant) {
      const item: ReservationItem2 = {
        revDate: dayjs(revDate).format("YYYY/MM/DD"),
        user: name,
        restaurant: restaurant,
        createdAt: new Date().toISOString(),
      };
      dispatch(addReservation(item));
    }
  };

  const [revDate, setRevDate] = useState<Dayjs | null>(null);

  return (
    <main className="w-[100%] flex flex-col items-center space-y-4">
      <div className="text-xl font-medium">New Reservation</div>
      <div className="text-xl font-medium">{restaurant}</div>

      <div className="w-fit space-y-2">
        <div className="text-md text-left text-gray-600">Pick-up Date </div>
        <DatePicker
          className="bg-white"
          value={revDate}
          onChange={(value) => {
            setRevDate(value);
          }}
        />
      </div>

      <button
        className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2
            text-white shadow-sm"
        onClick={makeReservation}
      >
        Reserve this Car
      </button>
      
    </main>
  );
}
