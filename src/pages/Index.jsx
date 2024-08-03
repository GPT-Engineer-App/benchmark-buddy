import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import BenchmarkList from '../components/BenchmarkList';
import AddBenchmarkModal from '../components/AddBenchmarkModal';

const Index = () => {
  const [benchmarks, setBenchmarks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const addBenchmark = (newBenchmark) => {
    setBenchmarks([...benchmarks, newBenchmark]);
  };

  const filteredBenchmarks = benchmarks.filter(benchmark =>
    benchmark.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>LLM App Benchmark Manager</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-4">
            <Input
              className="max-w-sm"
              placeholder="Search benchmarks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button onClick={() => setIsModalOpen(true)}>
              <Plus className="mr-2 h-4 w-4" /> Add Benchmark
            </Button>
          </div>
          <BenchmarkList benchmarks={filteredBenchmarks} />
        </CardContent>
      </Card>
      <AddBenchmarkModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={addBenchmark}
      />
    </div>
  );
};

export default Index;
