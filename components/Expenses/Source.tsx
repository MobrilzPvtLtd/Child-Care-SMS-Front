'use client'

import { useState } from 'react';
import { X, Plus, Search, Building2, CreditCard, DollarSign, Shield } from 'lucide-react';

interface BankOption {
  id: string;
  name: string;
  logo: string;
  type: 'bank' | 'credit_card';
}

const popularBanks: BankOption[] = [
  { id: 'chase', name: 'Chase', logo: '🏦', type: 'bank' },
  { id: 'bofa', name: 'Bank of America', logo: '🏛️', type: 'bank' },
  { id: 'wells_fargo', name: 'Wells Fargo', logo: '🏪', type: 'bank' },
  { id: 'citi', name: 'Citibank', logo: '🏢', type: 'bank' },
  { id: 'amex', name: 'American Express', logo: '💳', type: 'credit_card' },
  { id: 'visa', name: 'Visa', logo: '💳', type: 'credit_card' },
];

export default function Source() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBank, setSelectedBank] = useState<BankOption | null>(null);
  const [step, setStep] = useState<'select' | 'connect'>('select');

  const filteredBanks = popularBanks.filter(bank =>
    bank.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddBankAccount = () => {
    setIsModalOpen(true);
    setStep('select');
    setSelectedBank(null);
  };

  const handleBankSelect = (bank: BankOption) => {
    setSelectedBank(bank);
    setStep('connect');
  };

  const handleConnect = () => {
    // Simulate connection process
    console.log('Connecting to:', selectedBank?.name);
    setIsModalOpen(false);
    setStep('select');
    setSelectedBank(null);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setStep('select');
    setSelectedBank(null);
    setSearchTerm('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900">Bank accounts</h1>
            <div className="flex space-x-3">
              <button
                onClick={() => console.log('Add custom source')}
                className="px-4 py-2 border border-gray-300 text-gray-700 bg-white rounded-lg hover:bg-gray-50 transition-colors duration-200 flex items-center space-x-2"
              >
                <Plus className="w-4 h-4" />
                <span>Add custom source</span>
              </button>
              <button
                onClick={handleAddBankAccount}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
              >
                <Plus className="w-4 h-4" />
                <span>Add bank account</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Empty State */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
            <Search className="w-12 h-12 text-gray-400" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">No bank accounts</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Get started by connecting a bank account or credit card.
          </p>
          <button
            onClick={handleAddBankAccount}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2 mx-auto"
          >
            <Plus className="w-5 h-5" />
            <span>Add bank account</span>
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            {/* Overlay */}
            <div
              className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
              onClick={closeModal}
            ></div>

            {/* Modal */}
            <div className="inline-block w-full max-w-2xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  {step === 'select' ? 'Connect your bank account' : `Connect to ${selectedBank?.name}`}
                </h3>
                <button
                  onClick={closeModal}
                  className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {step === 'select' && (
                <>
                  {/* Search */}
                  <div className="mb-6">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search for your bank..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Bank List */}
                  <div className="space-y-3 max-h-96 overflow-y-auto">
                    {filteredBanks.map((bank) => (
                      <button
                        key={bank.id}
                        onClick={() => handleBankSelect(bank)}
                        className="w-full flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all duration-200"
                      >
                        <div className="text-2xl">{bank.logo}</div>
                        <div className="flex-1 text-left">
                          <div className="font-medium text-gray-900">{bank.name}</div>
                          <div className="text-sm text-gray-500 flex items-center space-x-1">
                            {bank.type === 'bank' ? (
                              <Building2 className="w-3 h-3" />
                            ) : (
                              <CreditCard className="w-3 h-3" />
                            )}
                            <span>{bank.type === 'bank' ? 'Bank Account' : 'Credit Card'}</span>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>

                  {filteredBanks.length === 0 && (
                    <div className="text-center py-8">
                      <p className="text-gray-500">No banks found matching "{searchTerm}"</p>
                    </div>
                  )}
                </>
              )}

              {step === 'connect' && selectedBank && (
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="text-3xl">{selectedBank.logo}</div>
                    <div>
                      <div className="font-semibold text-gray-900">{selectedBank.name}</div>
                      <div className="text-sm text-gray-500">
                        {selectedBank.type === 'bank' ? 'Bank Account' : 'Credit Card'}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Shield className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <div className="font-medium text-gray-900">Bank-level security</div>
                        <div className="text-sm text-gray-600">
                          Your data is encrypted and secure. We use read-only access.
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <DollarSign className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <div className="font-medium text-gray-900">Automatic transaction sync</div>
                        <div className="text-sm text-gray-600">
                          Your transactions will be automatically categorized and imported.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-3 pt-4">
                    <button
                      onClick={() => setStep('select')}
                      className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleConnect}
                      className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                      Connect Account
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}