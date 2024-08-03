import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const AddBenchmarkModal = ({ isOpen, onClose, onAdd }) => {
  const [benchmark, setBenchmark] = useState({
    name: '',
    model: '',
    latency: '',
    throughput: '',
    accuracy: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBenchmark(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(benchmark);
    onClose();
    setBenchmark({ name: '', model: '', latency: '', throughput: '', accuracy: '' });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Benchmark</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">Name</Label>
              <Input id="name" name="name" value={benchmark.name} onChange={handleChange} className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="model" className="text-right">Model</Label>
              <Input id="model" name="model" value={benchmark.model} onChange={handleChange} className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="latency" className="text-right">Latency (ms)</Label>
              <Input id="latency" name="latency" type="number" value={benchmark.latency} onChange={handleChange} className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="throughput" className="text-right">Throughput (req/s)</Label>
              <Input id="throughput" name="throughput" type="number" value={benchmark.throughput} onChange={handleChange} className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="accuracy" className="text-right">Accuracy (%)</Label>
              <Input id="accuracy" name="accuracy" type="number" value={benchmark.accuracy} onChange={handleChange} className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Add Benchmark</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddBenchmarkModal;
