import React from "react";
import { Badge } from "@/shad/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shad/card";
import { BadgeIcon, CheckCircledIcon } from "@radix-ui/react-icons";
import { BadgeCheck } from "lucide-react";

const formatDate = (timestamp: number): string => {
  const date = new Date(timestamp * 1000); // Convert Unix timestamp to milliseconds
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
};

const AttestationHistoryCard = ({
  timestamp,
  attester,
  productName,
  productSerialNo,
  previousAttestationId,
}: {
  timestamp: number;
  attester: string;
  productName: string;
  productSerialNo: string;
  previousAttestationId: string;
}) => {
  const formattedTimestamp = formatDate(timestamp);

  return (
    <div className="">
      <Card className="shadow-md rounded-3xl bg-blue-400 bg-opacity-20 px-2">
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg">{formattedTimestamp}</h2>
              <div className="flex text-sm items-center font-md">
                <p className="text-md font-light">Attested by :</p>
                <p className="px-2 py-1 text-sm">{attester}</p>
              </div>
            </div>
            <BadgeCheck className="text-green-500 h-12 w-12" />
          </div>
        </CardHeader>
        <CardContent className="">
          <div className="flex flex-col items-center">
            <div className="text-lg font-semibold">{productName}</div>
            <div className="flex gap-2 items-center">
              <div className="flex gap-2">
                <div className="text-md font-light">Product Serial No :</div>
                <div className="text-md font-semibold">{productSerialNo}</div>
              </div>
            </div>
          </div>
          <div className="flex justify-end pt-2">
            {previousAttestationId !== "" ? (
              <div className="flex gap-2">
                <p>Previous Attestation Id :</p>
                <Badge className="text-sm">
                  {" "}
                  {parseInt(previousAttestationId)}
                </Badge>
              </div>
            ) : (
              <Badge variant="secondary" className="text-md bg-green-400  ">
                Original Attestation
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AttestationHistoryCard;
