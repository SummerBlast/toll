import { Contact } from '@prisma/client';


interface ContactCardProps {
  contact: Contact;
}

export default function ContactCard(props: ContactCardProps) {
  return (
    <div className="border rounded-lg p-4 flex">
      <div className="my-auto">
       
      </div>
      <div className="ml-4">
        <p className="text-xl text-gray-700">
          {props.contact.vehicle_NumberPlate} {props.contact.vehicle_Type}
        </p>
        <p className="text-gray-500">{props.contact.Bridge}</p>
      </div>
    </div>
  );
}
