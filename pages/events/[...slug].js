import EventList from "@/components/events/event-list";
import ResultsTitle from "@/components/events/results-title";
import { getFilteredEvents } from "@/dummy-data";
import { useRouter } from "next/router";
import { Fragment } from "react";

function FilteredEventsPage() {
  const router = useRouter();
  const filteredData = router.query.slug;
  const filteredYear = filteredData && +filteredData[0];
  const filteredMonth = filteredData && +filteredData[1];

  const filteredEvents = getFilteredEvents({
    year: filteredYear,
    month: filteredMonth,
  });

  if (!filteredData) {
    return <p className="center">Loading...</p>;
  }

  if (
    isNaN(filteredYear) ||
    isNaN(filteredMonth) ||
    filteredYear > 2030 ||
    filteredYear < 2021 ||
    filteredMonth < 1 ||
    filteredMonth > 12
  ) {
    return <p className="center">Invalid parameters for search</p>;
  }

  if (!filteredEvents || filteredEvents?.length === 0) {
    return (
      <Fragment>
        <p className="center">No events found</p>
      </Fragment>
    );
  } else {
    const date = new Date(filteredYear, filteredMonth - 1);

    return (
      <Fragment>
        <ResultsTitle date={date}></ResultsTitle>
        <EventList items={filteredEvents}></EventList>
      </Fragment>
    );
  }
}

export default FilteredEventsPage;
