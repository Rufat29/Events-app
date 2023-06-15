import { Fragment } from "react";
import { useRouter } from "next/router";

import { getEventById } from "@/dummy-data";

import EventContent from "@/components/event-detial/event-content";
import EventSummary from "@/components/event-detial/event-summary";
import EventLogistics from "@/components/event-detial/event-logistics";

function EventDetailPage() {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);
  console.log(event, "rufat");

  if (!event) {
    return <p>No event found</p>;
  }

  return (
    <Fragment>
      <EventSummary title={event.title}></EventSummary>
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      ></EventLogistics>
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export default EventDetailPage;
