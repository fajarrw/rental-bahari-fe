import Link from "next/link";
import Image from "next/image";

export default function BookingSummary() {
  return (
		<main className="flex flex-col items-center">
			<div className="flex flex-row px-16 py-3 gap-3 w-full">
				<Link href="/search-car" className="font-poppins font-medium">&lt;</Link>
				<h1 className="font-poppins font-medium">Booking Summary</h1>
			</div>
			<div className="flex flex-col max-w-[25rem] w-full items-stretch gap-3 md:shadow-xl pt-4 pb-10 px-6">
				<div className="flex flex-col items-center box-info py-3 text-base">Congrats! You just saved Rp. 150000</div>
				<div className="flex flex-row justify-between items-center">
					<Image
						src="/assets/2023-EQE350-SEDAN.png"
						width={109}
						height={67}
						alt="car"
					/>
					<h2 className="text-lg">Daihatsu Sigra</h2>
				</div>
				<div className="flex flex-row justify-between">
					<div className="flex flex-col">
						<p className="text-xs font-semibold">Start</p>
						<p>Fri, 20 Oct</p>
					</div>
					<div className="flex flex-col">
						<p className="text-xs font-semibold">End</p>
						<p>Sat, 21 Oct</p>
					</div>
				</div>
				<hr/>
				<div className="flex flex-row justify-between text-sm py-1">
					<p>Price</p>
					<p className="font-semibold">Rp. 300000</p>
				</div>
				<div className="flex flex-row justify-between text-sm py-1">
					<p>Discount</p>
					<p className="font-semibold">Rp. 150000</p>
				</div>
				<hr />
				<div className="flex flex-row justify-between items-center py-1">
					<p>Payable Amount</p>
					<p className="font-semibold text-lg">Rp. 150000</p>
				</div>
				<div className="flex flex-col items-center py-1">
					<p>You aren't logged in. Please log in or sign up</p>
				</div>
				<div className="flex flex-row justify-center gap-4 py-2">	
					<button className="btn-secondary poppins font-normal">Sign Up</button>
					<button className="btn-primary poppins font-normal">Log In</button>
				</div>
			</div>
		</main>
	);
}
