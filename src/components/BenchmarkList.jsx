import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const BenchmarkList = ({ benchmarks }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Model</TableHead>
          <TableHead>Latency (ms)</TableHead>
          <TableHead>Throughput (req/s)</TableHead>
          <TableHead>Accuracy (%)</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {benchmarks.map((benchmark, index) => (
          <TableRow key={index}>
            <TableCell>{benchmark.name}</TableCell>
            <TableCell>{benchmark.model}</TableCell>
            <TableCell>{benchmark.latency}</TableCell>
            <TableCell>{benchmark.throughput}</TableCell>
            <TableCell>{benchmark.accuracy}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default BenchmarkList;
